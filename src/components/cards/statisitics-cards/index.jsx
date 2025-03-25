import React from "react";

const StatisticsCard = React.memo(({ title = "", stats = "" }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl md:min-h-[120px]">
      <div className="flex justify-between w-full">
        <p className="text-lg font-bold text-custom_black">{title}</p>
      </div>
      <p className="text-base font-medium">{stats}</p>
    </div>
  );
});

export default StatisticsCard;
