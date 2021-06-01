import React from "react";

const Select = ({ name, value, label, onChange, error = "", children }) => {
  return (
    <div className="mx-4 my-4">
      <div className="w-full">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
        <select
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          className="mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 block w-full h-12 shadow-md sm:text-md border-gray-400 border-1 rounded-md px-2"
        >
          {children}
        </select>
        <p className="mt-1">
          {" "}
          <span className="text-red-600 text-sm font-bold"> {error} </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Select;
