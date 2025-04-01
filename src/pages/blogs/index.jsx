import { useEffect, useState } from "react";
import TableLayout from "../../components/layouts/TableLayout";
import { BLOGS_COLUMN } from "./column";
import { useGetBlogs } from "../../hooks";


const Blogs = () => {
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = {}, isLoading: isBlogGetting = false } =
    useGetBlogs(queryParams);

  const { blogs = [], pagination = {} } = data?.data || {};

  const { currentPage, pages: totalPages } = pagination || {};

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
      loading={isBlogGetting}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Blogs;
