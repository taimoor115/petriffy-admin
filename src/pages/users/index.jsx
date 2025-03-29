import { useCallback, useState } from "react";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { USERS_COLUMN } from "./column";
const dummyData = [
  {
    _id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    country: "USA",
    createdAt: "2023-01-01",
    city: "New York",
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    country: "Canada",
    createdAt: "2023-02-01",
    city: "Toronto",
  },
  {
    _id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "555-555-5555",
    country: "UK",
    createdAt: "2023-03-01",
    city: "London",
  },
];
const Users = () => {
  const { openModal } = useModal();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });
  const totalPages = 10;

  const handlePageChange = (page) => {
    console.log(`Navigating to page ${page}`);
    setQueryParams((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const handleSearch = (searchText) => {
    setQueryParams((prev) => ({
      ...prev,
      search: searchText,
      page: 1,
    }));
  };

  const openWarningModal = useCallback(
    (id) => {
      openModal(<div>Warning Modal open</div>);
    },
    [openModal]
  );

  const USERS_COLUMNS = USERS_COLUMN(openWarningModal);

  return (
    <TableLayout
      title="Users"
      columns={USERS_COLUMNS}
      data={dummyData}
      loading={false}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Users;
