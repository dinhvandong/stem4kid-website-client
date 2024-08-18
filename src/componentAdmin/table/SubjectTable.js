import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const data = [
  {
    key: "1",
    id: 1,
    name: "Lập trình web  ",
    code: "STEM03",
    listedPrice: "5.000.000vnd",
    numberOfLessons: 400,
  },
];
const SubjectTable = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/subject/get-all"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleDelete = async (record) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/subject/deleteById?id=${record.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setData(data.filter((item) => item.id !== record.id));
        console.log("Record deleted successfully");
      } else {
        console.error("Failed to delete record");
      }
    } catch (error) {
      console.error("Error deleting record: ", error);
    }
  };

  const handleUpdate = async (record) => {
    try {
      const response = await fetch(`http://localhost:8080/api/subject/update`, {
        method: "POST", // Change method to POST as the backend API endpoint uses @PostMapping
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record), // Send the entire record object for updating
      });

      if (response.ok) {
        // fetchData(); // Refresh the data after update
        console.log("Record updated successfully");
      } else {
        console.error("Failed to update record");
      }
    } catch (error) {
      console.error("Error updating record: ", error);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Tên Khóa Môn Học",
      dataIndex: "name",
      key: "name",
      width: "10%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Mã Khóa Môn Học",
      dataIndex: "code",
      key: "code ",
      ...getColumnSearchProps("code"),
      width: "10%",
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ["descend", "ascend"],
    },
    {
      title: "Giá Niêm Yết",
      dataIndex: "listedPrice",
      key: "listedPrice",
      width: "15%",
      ...getColumnSearchProps("listedPrice"),
    },
    {
      title: "Số Buổi Học Quy Định",
      dataIndex: "numberOfLessons",
      key: "numberOfLessons",
      width: "15%",
      ...getColumnSearchProps("numberOfLessons"),
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure you want to delete this record?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="link"
              className="bg-red-600 text-black text-base font-semibold"
            >
              Delete
            </Button>
          </Popconfirm>
          <Button
            type="link"
            className="bg-blue-600 text-black text-base font-semibold"
            onClick={() => handleUpdate(record)}
          >
            Update
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      bordered
      style={{ borderSpacing: "0", borderCollapse: "collapse" }}
      dataSource={data}
    />
  );
};

export default SubjectTable;
