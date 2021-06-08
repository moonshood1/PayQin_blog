import React from "react";

const Field = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error = "",
}) => (
  <div className="mx-4 my-6">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      placeholder={placeholder}
      autoComplete="given-name"
      className="mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 block w-full h-12 shadow-md sm:text-md border-gray-400 border-1 rounded-md px-2"
    />
    <p className="mt-1">
      {" "}
      <span className="text-red-600 text-sm font-bold"> {error} </span>{" "}
    </p>
  </div>
);

export default Field;
