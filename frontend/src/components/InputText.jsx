import React from "react";

export default function InputText(props) {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      className="p-2 border border-2 rounded-lg outline-none focus:border-black w-full text-sm"
    />
  );
}
