import React from "react";
import { Home, PlusCircle, Settings, Menu } from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed, setPage }) {
  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-[250px]"
      } bg-white shadow-lg transition-all duration-300 flex flex-col`}
    >
      <button
        className="p-4 text-left"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu />
      </button>
      <nav className="flex-1 px-2 space-y-2">
        <button
          onClick={() => setPage("dashboard")}
          className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Home className="w-5 h-5" />
          {!collapsed && <span>Dashboard</span>}
        </button>
        <button
          onClick={() => setPage("create")}
          className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <PlusCircle className="w-5 h-5" />
          {!collapsed && <span>Create Post</span>}
        </button>
        <a
          href="#"
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span>Settings</span>}
        </a>
      </nav>
    </div>
  );
}