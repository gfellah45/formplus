import React from "react";
import { useSelector } from "react-redux";
const Footer = ({ page, setPage, setCount }) => {
  const { templates } = useSelector((state) => state);

  const onNext = () => {
    setPage((nextPage) => nextPage + 1);
    setCount((next) => next + 12);
  };
  const onPrev = () => {
    if (page <= 1) return;
    setPage((nextPage) => nextPage - 1);
    setCount((next) => next - 12);
  };
  return (
    <div className="flex justify-between w-full px-2 my-8">
      <div
        onClick={() => onPrev()}
        className="font-bold cursor-pointer hover:opacity-70"
      >
        Previos
      </div>
      <div>
        {" "}
        <span className="px-3 py-1 mx-2 border-2 border-gray-800">
          {page}
        </span>{" "}
        of {Math.floor(templates.filterd.length / 2)}
      </div>
      <div
        onClick={() => onNext()}
        className="font-bold cursor-pointer hover:opacity-70"
      >
        Next{" "}
        <img
          src="/assets/Vector (24).svg"
          alt="next"
          className="inline-block max-w-sm ml-1"
        />
      </div>
    </div>
  );
};

export default Footer;
