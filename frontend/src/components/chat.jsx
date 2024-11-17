import InputText from "./InputText";
import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
export default function chat() {
  let [msg, setMsg] = useState("");

  return (
    <div className="w-1/6 border-2  rounded  flex flex-col justify-end">
      <div className="p-2 w-full overflow-y-scroll">
        <p>
          <span className="font-bold text-green-600 text-md">Yodha: </span>
          This is dummy msg and it is updated after connection of websocket.
        </p>
      </div>
      <div
        className="w-full
      "
      >
        <input
          placeholder="Type a message"
          type="text"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          className="p-2 outline-none focus:border-black w-full text-base"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMsg("");
            }
          }}
        />
      </div>
    </div>
  );
}
