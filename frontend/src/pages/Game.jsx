import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Chat from "../components/chat";
import Canvas from "../components/Canvas";
import Header from "../components/Header";
import PlayerList from "../components/Playerlist";
export default function Game() {
  const { color, user, handleUser, room, handleRoom } = useContext(GameContext);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3">
      <Header />
      <div className="w-5/6 h-4/6 flex justify-center gap-3">
        <PlayerList />
        <Canvas />
        <Chat />
      </div>
    </div>
  );
}
