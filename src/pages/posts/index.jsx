import { useCallback, useEffect, useState } from "react";
import { WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { useDeletePost, useGetPosts } from "../../hooks";
import { POSTS_COLUMN } from "./column";

const Posts = () => {
  const { openModal, closeModal: onClose } = useModal();

  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = {}, isLoading: isPostFetching = false } =
    useGetPosts(queryParams);

  const { deletePost, isLoading: isPostDeleting } = useDeletePost();

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

  const handleDelete = async (id) => {
    try {
      await deletePost(id, {});
      onClose();
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };
  const openWarningModal = useCallback(
    (id) => {
      openModal(
        <WarningModal
          key={isPostDeleting}
          isLoading={isPostDeleting}
          onConfirm={() => handleDelete(id)}
          onClose={onClose}
        />
      );
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
