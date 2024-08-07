import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import logo from "../../assets/logo.png";
const data = [
  {
    key: "1",
    user_id: 1,
    username: "trinhlee297",
    email: "trinhlee297@gamil.com",
    password: "12345678",
    role: "Admin",
    created_at: "15/08/2020",
    last_login: "10:00:37 - 15/08/2020",
  },
  {
    key: "2",
    user_id: 2,
    username: "trinhlee297",
    email: "trinhlee297@gamil.com",
    password: "12345678",
    role: "Admin",
    created_at: "15/08/2020",
    last_login: "10:00:37 - 15/08/2020",
  },
  {
    key: "3",
    user_id: 3,
    username: "trinhlee297",
    email: "trinhlee297@gamil.com",
    password: "12345678",
    role: "Admin",
    created_at: "15/08/2020",
    last_login: "10:00:37 - 15/08/2020",
  },
  {
    key: "4",
    user_id: 4,
    username: "trinhlee297",
    email: "trinhlee297@gamil.com",
    password: "12345678",
    role: "Admin",
    created_at: "15/08/2020",
    last_login: "10:00:37 - 15/08/2020",
  },
];
const AccountTable = () => {
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
      dataIndex: "user_id",
      key: "user_id",
      width: "5%",
      ...getColumnSearchProps("user_id"),
    },

    {
      title: "Tên Tài Khoản",
      dataIndex: "username",
      key: "username",
      width: "15%",
      ...getColumnSearchProps("username"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email ",
      ...getColumnSearchProps("email"),
      width: "15%",
    },
    {
      title: "Mật Khẩu",
      dataIndex: "password",
      key: "password",
      width: "15%",
      ...getColumnSearchProps("password"),
    },

    {
      title: "Vai Trò",
      dataIndex: "role",
      key: "role",
      width: "15%",
      ...getColumnSearchProps("role"),
    },
    {
      title: "Ngày Đăng Kí",
      dataIndex: "created_at",
      key: "created_at_date",
      width: "10%",
      ...getColumnSearchProps("created_at"),
    },

    {
      title: "Lần Đăng Nhập Cuối",
      dataIndex: "last_login",
      key: "last_login",
      width: "10%",
      ...getColumnSearchProps("last_login"),
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

export default AccountTable;
