import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import logo from "../../assets/logo.png";
const data = [
  {
    key: "1",
    id: 1,
    name_course: "Java FullStack",
    course_code: "ST01",
    description: "Lớp có máy chiếu",
    category: "Chuyên ngành thiết kế web",
    instructor: "Đinh Văn Đông",
    start_date: "15/08/2023",
    end_date: "10/05/2024",
    language: "Tiếng Việt",
    duration_hours: "7 tháng",
    course_type: "Học trực tuyến và trực tiếp",
  },
  {
    key: "2",
    id: 2,
    name_course: "Thiết kế đồ họa",
    course_code: "ST02",
    description: "Lớp học trực tiếp",
    category: "Chuyên ngành đồ họa",
    instructor: "Vũ Văn Ước",
    start_date: "10/01/2023",
    end_date: "05/10/2024",
    language: "Tiếng Anh",
    duration_hours: "9 tháng",
    course_type: " Học trực tiếp",
  },
  {
    key: "3",
    id: 3,
    name_course: "Java FullStack",
    course_code: "ST01",
    description: "Lớp có máy chiếu",
    category: "Chuyên ngành thiết kế web",
    instructor: "Đinh Văn Đông",
    start_date: "15/08/2023",
    end_date: "10/05/2024",
    language: "Tiếng Việt",
    duration_hours: "7 tháng",
    course_type: "Học trực tuyến và trực tiếp",
  },
  {
    key: "4",
    id: 4,
    name_course: "Thiết kế đồ họa",
    course_code: "ST02",
    description: "Lớp học trực tiếp",
    category: "Chuyên ngành đồ họa",
    instructor: "Vũ Văn Ước",
    start_date: "10/01/2023",
    end_date: "05/10/2024",
    language: "Tiếng Anh",
    duration_hours: "9 tháng",
    course_type: " Học trực tiếp",
    avatar: `${logo}`,
  },
  // {
  //   key: "",
  //   id: 3,
  //   name_course: "Tên khóa học",
  //   course_code: "New York No. 1 Lake Park",
  //   description: "lớp học giỏi",
  //   category: " Danh mục hoặc chuyên ngành",
  //   instructor: "Giảng viên",
  //   start_date: "Ngày bắt đầu",
  //   end_date: "Ngày kết thúc",
  //   language: "Ngôn ngữ",
  //   duration_hours: "Số giờ học dự kiến",
  //   course_type: " Loại hình khóa học",
  // },
  // {
  //   key: "2",
  //   name: "Joe Black",
  //   name_course: 42,
  //   address: "London No. 1 Lake Park",
  // },
  // {
  //   key: "3",
  //   name: "Jim Green",
  //   name_course: 32,
  //   address: "Sydney No. 1 Lake Park",
  // },
  // {
  //   key: "4",
  //   name: "Jim Red",
  //   name_course: 32,
  //   address: "London No. 2 Lake Park",
  // },
];
const TableCourse = () => {
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
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   key: "avatar",
    //   width: "10%",
    //   render: (avatar) => (
    //     <img
    //       src={avatar}
    //       alt="Avatar"
    //       style={{ width: 50, height: 50, borderRadius: "50%" }}
    //     />
    //   ),
    //   // ...getColumnSearchProps("avatar"),
    // },
    {
      title: "Tên Khóa Học",
      dataIndex: "name_course",
      key: "name_course",
      width: "10%",
      ...getColumnSearchProps("name_course"),
    },
    {
      title: "Mã Khóa Học",
      dataIndex: "course_code",
      key: "course_code ",
      ...getColumnSearchProps("course_code"),
      width: "10%",
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ["descend", "ascend"],
    },
    // {
    //   title: "Mô Tả Khóa Học",
    //   dataIndex: "description",
    //   key: "description",
    //   width: "10%",
    //   ...getColumnSearchProps("description"),
    // },
    {
      title: "Chuyên Ngành",
      dataIndex: "category",
      key: "category",
      width: "15%",
      ...getColumnSearchProps("category"),
    },
    {
      title: "Giảng Viên",
      dataIndex: "instructor",
      key: "instructor",
      width: "15%",
      ...getColumnSearchProps("instructor "),
    },
    {
      title: "Ngày Bắt Đầu",
      dataIndex: "start_date",
      key: "start_date",
      width: "10%",
      ...getColumnSearchProps("start_date "),
    },

    {
      title: "Ngày Kết Thúc",
      dataIndex: "end_date",
      key: "end_date",
      width: "10%",
      ...getColumnSearchProps("end_date"),
    },
    // {
    //   title: "Ngôn Ngữ",
    //   dataIndex: "language",
    //   key: "language",
    //   width: "5%",
    //   ...getColumnSearchProps("language "),
    // },
    {
      title: "Số Giờ Học Dự Kiến",
      dataIndex: "duration_hours",
      key: "duration_hours",
      width: "10%",
      ...getColumnSearchProps("duration_hours"),
    },
    {
      title: "Loại Hình Thức Khóa Học",
      dataIndex: "course_type",
      key: "course_type",
      width: "20%",
      ...getColumnSearchProps("course_type"),
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
export default TableCourse;
