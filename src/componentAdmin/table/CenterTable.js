import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import centerService from "../../services/centerService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UpdateCenterModal from "../updateInfomation/UpdateCenterModal";
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
    id: 4,
    facilityName: "Lê Thanh Nghị",
    location: "19 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
    capacity: "150",
    currentUsage: "120",
    numberOfClassrooms: "15",
    openHours: "09:00 AM",
    closeHours: "21:00 PM",
  },
];
const CenterTable = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [data, setData] = useState([]);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  // const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [centerDataUpdate, setCenterDataUpdate] = useState({});

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // const handleOpenDeleteModal = (id) => {
  //   setItemId(id);
  //   setIsModalDeleteOpen(true);
  // };

  // const handleCloseDeleteModal = () => {
  //   setIsModalDeleteOpen(false);
  // };

  const handleOpenUpdateModal = (center) => {
    setCenterDataUpdate(center);
    setIsModalUpdateOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsModalUpdateOpen(false);
  };

  const handleUpdate = async (updateData) => {
    try {
      await centerService.update(centerDataUpdate.id, {
        ...centerDataUpdate,
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
      const response = await centerService.getAll();
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
        `http://localhost:8080/api/center/deleteById?id=${record.id}`,
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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      ...getColumnSearchProps("id"),
    },

    {
      title: "Tên Cơ Sở",
      dataIndex: "facilityName",
      key: "facilityName",
      width: "10%",
      ...getColumnSearchProps("facilityName"),
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
      dataIndex: "currentUsage",
      key: "currentUsage",
      width: "10%",
      ...getColumnSearchProps("currentUsage"),
    },

    {
      title: "Số Lượng Phòng Học",
      dataIndex: "numberOfClassrooms",
      key: "numberOfClassrooms",
      width: "10%",
      ...getColumnSearchProps("numberOfClassrooms"),
    },
    {
      title: "Giờ Mở Cửa",
      dataIndex: "openHours",
      key: "openHours",
      width: "10%",
      ...getColumnSearchProps("openHours"),
    },

    {
      title: "Giờ Đóng Cửa",
      dataIndex: "closeHours",
      key: "closeHours",
      width: "10%",
      ...getColumnSearchProps("closeHours"),
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
              setCenterDataUpdate(record);
              setShowUpdateModal(true);
            }}
          >
            Update
          </Button>

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
      <UpdateCenterModal
        isOpen={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        onUpdate={(e) => {
          handleUpdate(e);
          setShowUpdateModal(false);
        }}
        course={centerDataUpdate}
      />
    </>
  );
};

export default CenterTable;
