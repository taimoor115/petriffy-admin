import { useEffect, useState } from "react";
import TableLayout from "../../components/layouts/TableLayout";
import { BLOGS_COLUMN } from "./column";
import { useGetBlogs } from "../../hooks";

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

  const { data = {}, isLoading: isBlogGetting = false } =
    useGetBlogs(queryParams);

  const { blogs = [], pagination = {} } = data?.data || {};

  const { currentPage, pages: totalPages } = pagination || {};
  console.log(blogs, "--blogs", pagination);

  useEffect(() => {
    if (currentPage && currentPage !== queryParams.page) {
      setQueryParams((prev) => ({
        ...prev,
        page: currentPage,
      }));
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
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
      data={blogs}
      loading={false}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Blogs;
