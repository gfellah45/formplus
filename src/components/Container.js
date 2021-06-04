import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-11/12 mx-auto lg:w-11/12 xl:w-10/12">{children}</div>
  );
};

export default Container;
