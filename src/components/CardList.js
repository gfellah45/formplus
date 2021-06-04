import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import { isEmpty } from "../utility/isEmpty";

const CardList = ({ page, setPage, data, setCount, search }) => {
  console.log(data);
  return (
    <div>
      {isEmpty(data) ? (
        <div className="w-full text-2xl font-bold text-center">No Data</div>
      ) : (
        <div className="grid grid-cols-1 mt-10 md:gap-6 lg:gap-10 xl:gap-16 md:grid-cols-2 lg:grid-cols-3 ">
          {data.map((item) => (
            <Card name={item.name} description={item.description} />
          ))}
        </div>
      )}

      <div>
        <Footer page={page} setPage={setPage} setCount={setCount} />
      </div>
    </div>
  );
};

export default CardList;
