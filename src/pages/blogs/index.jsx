import { useState } from "react";
import TableLayout from "../../components/layouts/TableLayout";
import { BLOGS_COLUMN } from "./column";

const DUMMY_BLOGS_DATA = [
  {
    _id: "1",
    title: "First Blog Post",
    author: "Author One",
    likes: 10,
    comments: 2,
    createdAt: "2023-01-01",
  },
  {
    _id: "2",
    title: "Second Blog Post",
    author: "Author Two",
    likes: 20,
    comments: 5,
    createdAt: "2023-02-01",
  },
  {
    _id: "3",
    title: "Third Blog Post",
    author: "Author Three",
    likes: 15,
    comments: 3,
    createdAt: "2023-03-01",
  },
];
const Blogs = () => {
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

  const BLOGS_COLUMNS = BLOGS_COLUMN();

  return (
    <TableLayout
      title="Blogs"
      columns={BLOGS_COLUMNS}
      data={DUMMY_BLOGS_DATA}
      loading={false}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Blogs;
