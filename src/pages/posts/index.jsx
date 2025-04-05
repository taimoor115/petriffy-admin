import { useCallback, useEffect, useState } from "react";
import TableLayout from "../../components/layouts/TableLayout";
import { POSTS_COLUMN } from "./column";
import { useModal } from "../../context/modal";
import { WarningModal } from "../../components";
import { useGetPosts } from "../../hooks";

export const dummyData = [
  {
    _id: "1",
    title: "Post One",
    author: "Author A",
    category: "Category 1",
    age: 2,
    isVaccinated: true,
    city: "City 1",
    status: "Published",
  },
  {
    _id: "2",
    title: "Post Two",
    author: "Author B",
    category: "Category 2",
    age: 1,
    isVaccinated: false,
    city: "City 2",
    status: "Draft",
  },
  {
    _id: "3",
    title: "Post Three",
    author: "Author C",
    category: "Category 1",
    age: 3,
    isVaccinated: true,
    city: "City 3",
    status: "Published",
  },
];
const Posts = () => {
  const { openModal } = useModal();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = {}, isLoading: isPostFetching = false } =
    useGetPosts(queryParams);

  console.log(data);
  const { data: posts = [], pagination = {} } = data?.data || {};

  const { currentPage, totalPages } = pagination || {};

  useEffect(() => {
    if (currentPage && currentPage !== queryParams.page) {
      setQueryParams((prev) => ({
        ...prev,
        page: currentPage,
      }));
    }
  }, [currentPage]);

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
      openModal(<WarningModal />);
    },
    [openModal]
  );

  const POSTS_COLUMNS = POSTS_COLUMN(openWarningModal);

  return (
    <TableLayout
      title="Posts"
      columns={POSTS_COLUMNS}
      data={posts}
      loading={isPostFetching}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Posts;
