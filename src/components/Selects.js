import React from "react";
import { useDispatch } from "react-redux";

const Selects = ({ label, id, defaultValue, func, options }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative w-full h-8 input-component ">
      <select
        id={id}
        type="text"
        name="name"
        className="w-full h-full px-2 text-xs text-gray-700 transition-all border-gray-300 rounded-sm border-blue"
        onChange={(e) => dispatch(func(e.target.value))}
      >
        <option defaultValue className="text-xs text-gray-500">
          {defaultValue}
        </option>
        {options &&
          options.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
      <label
        htmlFor={id}
        className="absolute px-1 transition-all bg-white left-2"
      >
        {label}
      </label>
    </div>
  );
};

export default Selects;
