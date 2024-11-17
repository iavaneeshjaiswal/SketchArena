import React from "react";

export default function Playerlist() {
  return (
    <div className="w-52 border-2 rounded gap-1 flex flex-col justify-start p-2">
      <div
        className="flex gap-5 items-center border border-red-500 p-2 rounded"
        style={{ backgroundColor: "rgb(255, 0, 0 , 0.1)" }}
      >
        <p>#1</p>
        <div>
          <p className="text-red-500 font-semibold">Mai Balatkari</p>
          <p className="text-sm">score : 1932</p>
        </div>
      </div>
      <div
        className="flex gap-5 items-center border border-blue-500 p-2 rounded"
        style={{ backgroundColor: "rgb(0, 0, 255 , 0.1)" }}
      >
        <p>#2</p>
        <div>
          <p className="text-blue-500 font-semibold">Mai Balatkari</p>
          <p className="text-sm">score : 1932</p>
        </div>
      </div>
      <div className="flex gap-5 items-center border border-green-500 p-2 rounded"  style={{ backgroundColor: "rgb(0, 255, 0 , 0.1)" }}>
        <p>#3</p>
        <div>
          <p className="text-green-500 font-semibold">Mai Balatkari</p>
          <p className="text-sm">score : 1932</p>
        </div>
      </div>
    </div>
  );
}
