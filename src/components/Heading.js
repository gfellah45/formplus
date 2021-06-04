import React from "react";
import Selects from "./Selects";
import { getCategories, getByOrder, getDate } from "../redux/template";
import Search from "./Search";

const Heading = ({ setSearch }) => {
  return (
    <header className="flex flex-col justify-between mt-10 lg:flex-row">
      {/* search button */}
      <div className="box-border relative w-full px-2 py-1 border border-gray-200 rounded lg:w-3/12 ">
        <Search setSearch={setSearch} />
        <img
          className="absolute cursor-pointer right-2 top-1"
          src="/assets/Group 19253.svg"
          alt="search"
        />
      </div>
      {/* selects */}
      <div className="flex flex-col flex-wrap w-full lg:flex-row lg:w-7/12 ">
        <div className="flex w-full my-4 lg:my-0 lg:px-4 lg:items-center lg:justify-end lg:w-2/12">
          <p className="text-sm text-gray-500">Sort By:</p>
        </div>
        <div className="flex justify-between w-full space-x-2 lg:w-10/12 lg:space-x-10">
          <Selects
            label="Category"
            id="category"
            defaultValue="All"
            options={[
              { value: "Education", label: "Education" },
              { value: "E-commerce", label: "E-commerce" },
              { value: "Health", label: "Health" },
            ]}
            func={getCategories}
          />
          <Selects
            func={getByOrder}
            label="Order"
            id="order"
            defaultValue="Default"
            options={[
              { value: "Ascending", label: "Ascending" },
              { value: "Descending", label: "Descending" },
            ]}
          />
          <Selects
            func={getDate}
            label="Date"
            id="date"
            defaultValue="Default"
            options={[
              { value: "Ascending", label: "Ascending" },
              { value: "Descending", label: "Descending" },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Heading;
