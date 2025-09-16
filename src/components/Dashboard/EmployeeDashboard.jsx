import React from "react";
import Header from "../Common/Header";
import TaskCountCard from "../Common/TaskCountCard";
import TaskDescCard from "../Common/TaskDescCard";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 h-screen bg-[#1c1c1c]">
      <Header />
      <div className="flex items-center mt-10 gap-5 screen">
        <TaskCountCard bgColor="bg-blue-400" noOfTasks={2} Status="New task"/>
        <TaskCountCard bgColor="bg-green-400" noOfTasks={1} Status="Completed task"/>
        <TaskCountCard bgColor="bg-amber-400" noOfTasks={3} Status="Accepted task"/>
        <TaskCountCard bgColor="bg-red-400" noOfTasks={0} Status="Failed task"/>
      </div>
      <div id="tasklist" className="h-[55%] mt-10 py-5 overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap">
        <TaskDescCard/>
        {/* <TaskDescCard/>
        <TaskDescCard/>
        <TaskDescCard/>
        <TaskDescCard/>
        <TaskDescCard/>
        <TaskDescCard/> */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
