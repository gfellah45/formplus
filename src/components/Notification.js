import React from "react";

const Notification = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-24 px-4 py-4 my-6 align-middle md:flex-row lg:flex-row lg:my-10 md:h-10 lg:h-14 bg-alert ">
      {" "}
      <img
        src="/assets/Group (3).svg"
        alt="alert"
        className="lg:mx-2.5 w-6 h-6 md:mx-1.5 my-1 lg:my-0"
      />
      <p className="text-xs text-center text-gray-600">
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </div>
  );
};

export default Notification;
