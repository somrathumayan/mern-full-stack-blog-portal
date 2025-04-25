import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import CreatePost from "../components/CreatePost";

const DBHome = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setPage={setPage}
      />
      <div className="flex flex-col flex-1">
        <DashboardNavbar />
        <main className="p-4 overflow-y-auto">
          {page === "dashboard" && (
            <div>
              <CreatePost />
            </div>
          )}
          {page === "create" && <CreatePost />}
        </main>
      </div>
    </div>
  );
};

export default DBHome;
