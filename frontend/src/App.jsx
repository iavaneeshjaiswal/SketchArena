import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import { GameProvider } from "./context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}
