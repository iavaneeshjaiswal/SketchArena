import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="px-8 rounded-lg py-2 cursur-pointer font-bold text-white w-full md:p-3"
      style={{ backgroundColor: `${props.color}` }}
    >
      {props.value}
    </button>
  );
}
