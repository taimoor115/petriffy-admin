import React from "react";
import { LogoutSvg } from "../../assets/svgs";

const Logout = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <div className="mb-6 text-center">
        <LogoutSvg />
        <h3 className="mb-3 text-lg font-bold md:text-2xl text-custom_primary">
          Confirm Logout
        </h3>
        <p className="text-base text-gray-600 md:text-lg">
          Are you sure you want to logout?
        </p>
      </div>
      <div className="flex gap-4">
        <button
          //   onClick={handleLogout}
          //   disabled={isPending || isLoading}
          className="px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base text-white rounded-lg bg-custom_purple hover:bg-purple-700"
        >
          Yes, Logout
        </button>
        <button
          //   onClick={closeModal}
          //   disabled={isPending || isLoading}
          className="px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
