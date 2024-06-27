import React from "react";

export default function Input({ label, invalid, className, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClassses =
    "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClassses += "text-red-500 bg-red-100 border-red-300 ";
  } else {
    labelClasses += " text-stone-300";
    inputClassses += "text-gray-700  bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClassses} {...props} />
    </p>
  );
}
