import React, { useContext } from "react";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

export default function Lobby() {
  const { color, user, handleUser, room, handleRoom } = useContext(GameContext);

  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col w-4/6 p-4 md:w-2/6 lg:w-2/6  xl:w-1/6 min-w-fit border-2 rounded-lg min-h-max gap-5 items-center">
        <h1
          className="text-lg font-bold "
          style={{ color: `${color.TextColors.PrimaryText}` }}
        >
          Sketch Arena
        </h1>
        <div className="flex gap-2 flex flex-col lg:flex-row w-5/6 md:w-full">
          <InputText
            placeholder="Babua Naam daldo"
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handleUser("name", e.target.value)}
          />
          <select
            className="ouline-none border-2 rounded-md p-2  focus:outline-none text-sm"
            name="language"
            value={room.language}
            onChange={(e) => {
              handleRoom("language", e.target.value);
            }}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="bhojpuri">Bhojpuri</option>
          </select>
        </div>
        <div className="w-5/6 md:w-full flex flex-col gap-2">
          <Button
            value="Play"
            onClick={() => {
              navigate("/game");
            }}
            color={color.SecondaryColor}
          />
          <Button
            value="Create Room"
            onClick={() => {
              navigate("/game");
            }}
            color={color.PrimaryColor}
          />
        </div>
      </div>
    </div>
  );
}
