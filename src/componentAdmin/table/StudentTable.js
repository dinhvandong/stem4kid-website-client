import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import logo from "../../assets/logo.png";
const data = [
  {
    key: "1",
    id: 1,
    avatar: `${logo}`,
    student_name: "Nong Van Trinh",
    email: "trinhlee297@gamil.com",
    phone_number: "0337413702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    enrollment_date: "15/08/2023",
    course_id: "1",
  },

  {
    key: "2",
    id: 2,
    avatar: `${logo}`,
    student_name: "Nong Van Trinh",
    email: "trinhlee297@gamil.com",
    phone_number: "0337413702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    enrollment_date: "15/08/2023",
    course_id: "1",
  },

  {
    key: "3",
    id: 3,
    avatar: `${logo}`,
    student_name: "Nong Van Trinh",
    email: "trinhlee297@gamil.com",
    phone_number: "0337413702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    enrollment_date: "15/08/2023",
    course_id: "1",
  },

  {
    key: "4",
    id: 4,
    avatar: `${logo}`,
    studentName: "Nong Van Trinh",
    email: "trinhlee297@gamil.com",
    phoneNumber: "0337413702",
    address: "Hoang Mai, Thanh Xuan Ha Noi",
    enrollmentDate: "15/08/2023",
    // course_id: "1",
  },
];
const StudentTable = () => {
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
      title: "Avatar",
      dataIndex: "avatar",
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
      dataIndex: "studentName",
      key: "studentName",
      width: "15%",
      ...getColumnSearchProps("studentName"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
      width: "15%",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: "15%",
      ...getColumnSearchProps("phoneNumber"),
    },

    {
      title: "Địa Chỉ",
      dataIndex: "address",
      key: "address",
      width: "15%",
      ...getColumnSearchProps("address"),
    },
    {
      title: "Ngày Đăng Kí",
      dataIndex: "enrollmentDate",
      key: "enrollmentDate",
      width: "10%",
      ...getColumnSearchProps("enrollmentDate"),
    },

    // {
    //   title: "Khóa Học",
    //   dataIndex: "course_id",
    //   key: "course_id",
    //   width: "15%",
    //   ...getColumnSearchProps("course_id"),
    // },
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
export default StudentTable;
