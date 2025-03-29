const TableSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center px-6 py-3">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex-1 h-4 mx-2 bg-[#F0F3F7] rounded"
            ></div>
          ))}
      </div>

      {Array(12)
        .fill(0)
        .map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center px-6 py-4 border-b border-[#F0F3F7]"
          >
            {Array(8)
              .fill(0)
              .map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="flex-1 h-3 mx-2 bg-[#F0F3F7] rounded"
                ></div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default TableSkeleton;
