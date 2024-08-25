import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const data = [
  {
    key: "1",
    class_id: 1,
    class_name: "Railway78",
    course_id: "1",
    instructor: "Dinh Van Dong",
    start_date: "15/07/2023",
    end_date: "02/02/2024",
    room: "London",
    schedule: "2/4/6",
    capacity: "20",
    current_enrollment: "15",
  },

  {
    key: "2",
    class_id: 2,
    class_name: "Railway78",
    course_id: "1",
    instructor: "Dinh Van Dong",
    start_date: "15/07/2023",
    end_date: "02/02/2024",
    room: "London",
    schedule: "2/4/6",
    capacity: "20",
    current_enrollment: "15",
  },
  {
    key: "3",
    class_id: 3,
    class_name: "Railway78",
    course_id: "1",
    instructor: "Dinh Van Dong",
    start_date: "15/07/2023",
    end_date: "02/02/2024",
    room: "London",
    schedule: "2/4/6",
    capacity: "20",
    current_enrollment: "15",
  },

  {
    key: "4",
    id: 4,
    className: "Railway78",
    // course_id: "1",
    instructor: "Dinh Van Dong",
    startDate: "15/07/2023",
    endDate: "02/02/2024",
    room: "London",
    schedule: "2/4/6",
    capacity: "20",
    currentEnrollment: "15",
  },
];
const ClassTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Tên Lớp Học",
      dataIndex: "className",
      key: "className",
      width: "10%",
      ...getColumnSearchProps("className"),
    },
    // {
    //   title: "ID Khóa Học",
    //   dataIndex: "course_id",
    //   key: "course_id",
    //   width: "5%",
    //   ...getColumnSearchProps("course_id"),
    // },
    {
      title: "Giảng Viên",
      dataIndex: "instructor",
      key: "instructor ",
      ...getColumnSearchProps("instructor"),
      width: "15%",
    },

    {
      title: "Ngày Bắt Đầu",
      dataIndex: "startDate",
      key: "startDate",
      width: "10%",
      ...getColumnSearchProps("startDate"),
    },

    {
      title: "Ngày Kết Thúc",
      dataIndex: "endDate",
      key: "endDate",
      width: "10%",
      ...getColumnSearchProps("endDate"),
    },
    {
      title: "Phòng Học",
      dataIndex: "room",
      key: "room",
      width: "10%",
      ...getColumnSearchProps("room "),
    },

    {
      title: "Lịch Học",
      dataIndex: "schedule",
      key: "schedule",
      width: "10%",
      ...getColumnSearchProps("schedule"),
    },
    {
      title: "Sức Chứa",
      dataIndex: "capacity",
      key: "capacity",
      width: "10%",
      ...getColumnSearchProps("capacity"),
    },
    {
      title: "Số Học Viên Hiện Tại",
      dataIndex: "currentEnrollment",
      key: "currentEnrollment",
      width: "10%",
      ...getColumnSearchProps("currentEnrollment"),
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

export default ClassTable;
