import React from "react";
import { GenericTable, Heading, Modal } from "../../common";
import { Pagination } from "../../components";

const TableLayout = ({
  title,
  actionButton,
  columns,
  data,
  loading = false,
  queryParams,
  totalPages,
  onPageChange,
  onSearch,
}) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <Heading heading={title} />
        {actionButton && actionButton}
      </div>

      <input
        type="text"
        placeholder="Search"
        value={queryParams?.search || ""}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-5 py-2 mt-4 border rounded-md border-gray-4 shadow-4 focus:outline-none"
      />

      <GenericTable columns={columns} loading={loading} data={data} />

      <Pagination
        currentPage={queryParams.page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <Modal />
    </section>
  );
};

export default TableLayout;
