import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    socket: "",
  });

  const [room, setRoom] = useState({
    roomID: "",
    language: "english",
  });
  const color = {
    PrimaryColor: "#3B82F6",
    SecondaryColor: "#F59E0B",
    AccentColors: {
      correct: "#10B981",
      wrong: "#EF4444",
    },
    TextColors: {
      PrimaryText: "#1F2937",
      SecondaryText: "#6B7280",
    },
    CanvasColors: {
      DrawingArea: "#FFFFFF",
      Borders: "#D1D5DB",
    },
  };

  const handleUser = (name, value) => {
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleRoom = (name, value) => {
    setRoom((prev) => ({ ...prev, [name]: value }));
    console.log(room);
  };

  return (
    <GameContext.Provider value={{ color, user, handleUser, room, handleRoom }}>
      {children}
    </GameContext.Provider>
  );
};
