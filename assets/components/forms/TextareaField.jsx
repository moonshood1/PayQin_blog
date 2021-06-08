import React from "react";

const LongField = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  rows,
  error = "",
}) => (
  <div className="mx-4 my-6">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      rows={rows}
      placeholder={placeholder}
      autoComplete="given-name"
      className="mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 block w-full shadow-md sm:text-md border-gray-400 border-1 rounded-md px-2 py-2"
    />
  </div>
);
export default LongField;
