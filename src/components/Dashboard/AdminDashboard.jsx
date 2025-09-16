import React from "react";
import Header from "../Common/Header";
import CreateTask from "../Common/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="p-7 h-screen w-full ">
      <Header />
      <CreateTask/>
    </div>
  );
};

export default AdminDashboard;
