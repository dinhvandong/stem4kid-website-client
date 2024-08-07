import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import logo from "../../assets/logo.png";
const data = [
  {
    key: "1",
    intructor_id: 1,
    avavtar: `${logo}`,
    intructor_name: "Dinh Van Dong",
    email: "dinhvandong12.com",
    phone_number: "0337444702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    department: "Java",
    course_taught: "Railway78",
  },
  {
    key: "2",
    intructor_id: 2,
    avavtar: `${logo}`,
    intructor_name: "Dinh Van Dong",
    email: "dinhvandong12.com",
    phone_number: "0337444702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    department: "Java",
    course_taught: "Railway78",
  },
  {
    key: "3",
    intructor_id: 3,
    avavtar: `${logo}`,
    intructor_name: "Dinh Van Dong",
    email: "dinhvandong12.com",
    phone_number: "0337444702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    department: "Java",
    course_taught: "Railway78",
  },
  {
    key: "4",
    intructor_id: 4,
    avavtar: `${logo}`,
    intructor_name: "Dinh Van Dong",
    email: "dinhvandong12.com",
    phone_number: "0337444702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    department: "Java",
    course_taught: "Railway78",
  },
];
const TeacherTable = () => {
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
      dataIndex: "intructor_id",
      key: "intructor_id",
      width: "5%",
      ...getColumnSearchProps("intructor_id"),
    },
    {
      title: "Avatar",
      dataIndex: "avavtar",
      key: "avatar",
      width: "10%",
      render: (avatar) => (
        <img
          src={avatar}
          alt="Avatar"
          style={{ width: 100, height: 70, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Họ Và Tên",
      dataIndex: "intructor_name",
      key: "intructor_name",
      width: "15%",
      ...getColumnSearchProps("intructor_name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email ",
      ...getColumnSearchProps("email"),
      width: "15%",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phone_number",
      key: "phone_number",
      width: "15%",
      ...getColumnSearchProps("phone_number"),
    },

    {
      title: "Địa Chỉ",
      dataIndex: "address",
      key: "address",
      width: "15%",
      ...getColumnSearchProps("address"),
    },
    {
      title: "Khoa",
      dataIndex: "department",
      key: "department",
      width: "10%",
      ...getColumnSearchProps("department"),
    },

    {
      title: "Khóa Học Đã Giảng",
      dataIndex: "course_taught",
      key: "course_taught",
      width: "10%",
      ...getColumnSearchProps("course_taught"),
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

export default TeacherTable;
