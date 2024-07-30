import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full">
      <nav className="border-gray-800 bg-gray-50 w-full">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold">Frontend.</h2>
        </div>
      </nav>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
