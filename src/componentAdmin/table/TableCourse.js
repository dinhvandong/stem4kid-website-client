import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import logo from "../../assets/logo.png";
import UpdateCourseModal from "../updateInfomation/UpdateCourseModal";
import { useNavigate } from "react-router-dom";
import courseService from "../../services/courseService";
import { toast } from "react-toastify";
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
];
const TableCourse = () => {
  // const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [data, setData] = useState([]);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  // const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [courseDataUpdate, setCourseDataUpdate] = useState({});

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // const handleOpenDeleteModal = (id) => {
  //   setItemId(id);
  //   setIsModalDeleteOpen(true);
  // };

  // const handleCloseDeleteModal = () => {
  //   setIsModalDeleteOpen(false);
  // };

  const handleOpenUpdateModal = (course) => {
    setCourseDataUpdate(course);
    setIsModalUpdateOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsModalUpdateOpen(false);
  };

  const handleUpdate = async (updateData) => {
    try {
      await courseService.update(courseDataUpdate.id, {
        ...courseDataUpdate,
        ...updateData,
      });
      toast.success("Cập nhật thành công");
      setIsModalUpdateOpen(false);
      getData();
    } catch (error) {
      toast.error("Cập nhật thất bại");
      console.error("Error updating item", error);
    }
  };

  // const handleConfirmDelete = async () => {
  //   try {
  //     await courseService.delete(itemId);
  //     getData();
  //     toast.success("Xóa thành công");
  //     setIsModalDeleteOpen(false);
  //   } catch (error) {
  //     toast.error("Xóa thất bại");

  //     console.error("đã có lỗi", error);
  //   }
  // };

  const getData = async () => {
    try {
      const response = await courseService.getAll();
      setData(response);
    } catch (error) {
      console.log("có lỗi...", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const openModal = () => {
  //   setIsOpenModal(true);
  // };

  // const closeModal = () => {
  //   setIsOpenModal(false);
  // };
  // const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  const goToUpdateCourse = () => {
    navigate("/admin/update/course");
  };

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
        `http://localhost:8080/api/course/deleteById?id=${record.id}`,
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

  // const handleUpdate = async (record) => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/api/course/update`, {
  //       method: "POST", // Change method to POST as the backend API endpoint uses @PostMapping
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(record), // Send the entire record object for updating
  //     });

  //     if (response.ok) {
  //       // fetchData(); // Refresh the data after update
  //       console.log("Record updated successfully");
  //     } else {
  //       console.error("Failed to update record");
  //     }
  //   } catch (error) {
  //     console.error("Error updating record: ", error);
  //   }
  // };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Tên Khóa Học",
      dataIndex: "nameCourse",
      key: "nameCourse",
      width: "10%",
      ...getColumnSearchProps("nameCourse"),
    },
    {
      title: "Mã Khóa Học",
      dataIndex: "courseCode",
      key: "courseCode ",
      ...getColumnSearchProps("courseCode"),
      width: "10%",
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ["descend", "ascend"],
    },
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
      ...getColumnSearchProps("instructor"),
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
      title: "Số Giờ Học Dự Kiến",
      dataIndex: "durationHours",
      key: "durationHours",
      width: "10%",
      ...getColumnSearchProps("durationHours"),
    },
    {
      title: "Loại Hình Thức Khóa Học",
      dataIndex: "courseType",
      key: "courseType",
      width: "20%",
      ...getColumnSearchProps("courseType"),
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
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>

          <Button
            type="link"
            onClick={() => {
              setCourseDataUpdate(record);
              setShowUpdateModal(true);
            }}
          >
            Update
          </Button>
          {/* <UpdateCourseModal isOpen={isOpenModal} onClose={closeModal} /> */}

          <Button type="link" onClick={() => handleUpdate(record)}>
            Add Student
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        bordered
        style={{ borderSpacing: "0", borderCollapse: "collapse", text: "24px" }}
        dataSource={data}
      />
      <UpdateCourseModal
        isOpen={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        onUpdate={(e) => {
          handleUpdate(e);
          setShowUpdateModal(false);
        }}
        course={courseDataUpdate}
      />
    </>
  );
};
export default TableCourse;
