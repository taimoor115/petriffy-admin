import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main>
            <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};


export default DefaultLayout;
