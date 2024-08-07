import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const data = [
  {
    key: "1",
    facility_id: 1,
    facility_name: "Lê Thanh Nghị",
    location: "19 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
    capacity: "150",
    current_usage: "120",
    number_of_classroms: "15",
    open_hours: "09:00 AM",
    close_hours: "21:00 PM",
  },

  {
    key: "2",
    facility_id: 2,
    facility_name: "Lê Thanh Nghị",
    location: "19 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
    capacity: "150",
    current_usage: "120",
    number_of_classroms: "15",
    open_hours: "09:00 AM",
    close_hours: "21:00 PM",
  },
  {
    key: "3",
    facility_id: 3,
    facility_name: "Lê Thanh Nghị",
    location: "19 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
    capacity: "150",
    current_usage: "120",
    number_of_classroms: "15",
    open_hours: "09:00 AM",
    close_hours: "21:00 PM",
  },

  {
    key: "4",
    facility_id: 4,
    facility_name: "Lê Thanh Nghị",
    location: "19 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
    capacity: "150",
    current_usage: "120",
    number_of_classroms: "15",
    open_hours: "09:00 AM",
    close_hours: "21:00 PM",
  },
];
const CenterTable = () => {
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
      dataIndex: "facility_id",
      key: "facility_id",
      width: "5%",
      ...getColumnSearchProps("facility_id"),
    },

    {
      title: "Tên Cơ Sở",
      dataIndex: "facility_name",
      key: "facility_name",
      width: "10%",
      ...getColumnSearchProps("facility_name"),
    },
    {
      title: "Địa Điểm",
      dataIndex: "location",
      key: "location",
      width: "15%",
      ...getColumnSearchProps("location"),
    },
    {
      title: "Sức Chứa",
      dataIndex: "capacity",
      key: "capacity ",
      ...getColumnSearchProps("capacity"),
      width: "5%",
    },

    {
      title: "Số Lượng Sử Dụng Cơ Sở Hiện Tại",
      dataIndex: "current_usage",
      key: "current_usage",
      width: "10%",
      ...getColumnSearchProps("current_usage"),
    },

    {
      title: "Số Lượng Phòng Học",
      dataIndex: "number_of_classroms",
      key: "number_of_classroms",
      width: "10%",
      ...getColumnSearchProps("number_of_classroms"),
    },
    {
      title: "Giờ Mở Cửa",
      dataIndex: "open_hours",
      key: "open_hours",
      width: "10%",
      ...getColumnSearchProps("open_hours"),
    },

    {
      title: "Giờ Đóng Cửa",
      dataIndex: "close_hours",
      key: "close_hours",
      width: "10%",
      ...getColumnSearchProps("close_hours"),
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

export default CenterTable;
