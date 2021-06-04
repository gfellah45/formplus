import React from "react";

const Count = ({ filterd }) => {
  return (
    <div className="flex justify-between w-full mt-20">
      <div className="text-sm font-bold text-gray-700">All Templates</div>
      <div className="text-sm text-gray-400">{filterd.length} templates</div>
    </div>
  );
};

export default Count;
