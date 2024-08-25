import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const data = [
  {
    key: "1",
    record_id: 1,
    transaction_date: "10/10/2023",
    description: "Đã chuyển khoản trước 1 nửa số tiền học",
    amount: "3.000.000vnd",
    category: "Khóa Java FullStack",
    transaction_type: "Thu Tiền Học Phí",
    account_id: "1",
  },

  {
    key: "2",
    record_id: 2,
    transaction_date: "10/10/2023",
    description: "Đã chuyển khoản trước 1 nửa số tiền học",
    amount: "3.000.000vnd",
    category: "Khóa Java FullStack",
    transaction_type: "Thu Tiền Học Phí",
    account_id: "1",
  },
  {
    key: "3",
    record_id: 3,
    transaction_date: "10/10/2023",
    description: "Đã chuyển khoản trước 1 nửa số tiền học",
    amount: "3.000.000vnd",
    category: "Khóa Java FullStack",
    transaction_type: "Thu Tiền Học Phí",
    account_id: "1",
  },

  {
    key: "4",
    record_id: 4,
    transactionDate: "10/10/2023",
    description: "Đã chuyển khoản trước 1 nửa số tiền học",
    amount: "3.000.000vnd",
    category: "Khóa Java FullStack",
    transactionType: "Thu Tiền Học Phí",
    // account_id: "1",
  },
];
const FinanceTable = () => {
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
      title: "Ngày Giao Dịch",
      dataIndex: "transactionDate",
      key: "transactionDate",
      width: "10%",
      ...getColumnSearchProps("transactionDate"),
    },

    {
      title: "Mô Tả",
      dataIndex: "description",
      key: "description",
      width: "15%",
      ...getColumnSearchProps("description"),
    },
    {
      title: "Số Tiền",
      dataIndex: "amount",
      key: "amount ",
      ...getColumnSearchProps("amount"),
      width: "5%",
    },

    {
      title: "Danh Mục",
      dataIndex: "category",
      key: "category",
      width: "10%",
      ...getColumnSearchProps("category"),
    },

    {
      title: "Loại Giao Dịch",
      dataIndex: "transactionType",
      key: "transactionType",
      width: "10%",
      ...getColumnSearchProps("transactionType"),
    },
    // {
    //   title: "Tài Khoản Liên Kết",
    //   dataIndex: "account_id",
    //   key: "account_id",
    //   width: "10%",
    //   ...getColumnSearchProps("account_id"),
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

export default FinanceTable;
