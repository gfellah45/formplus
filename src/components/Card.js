import React from "react";

const Card = ({ name, description }) => {
  return (
    <div className="flex flex-col flex-wrap h-56 shadow-2xl cursor-pointer hover:bg-gray-100">
      <div className="p-5 h-4/5">
        <div className="text-2xl font-bold">{name}</div>
        <div className="mt-4 overflow-hidden text-sm leading-snug tracking-tight overflow-clip text-neutral md:tracking-wide ">
          {description}
        </div>
      </div>
      <div className="flex items-center h-1/5 bg-cardButtom text-shade6 ">
        {" "}
        <div className="pl-6 cursor-pointer">UseTemplate</div>{" "}
      </div>
    </div>
  );
};

export default Card;
