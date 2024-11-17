import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "node:http";

dotenv.config();
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());

io.on("connection", (socket) => {
  console.log("a user connected" + socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected" + socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
