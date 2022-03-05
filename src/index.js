import cors from "cors";
import express from "express";
import morgan from "morgan";
import routes from "./routes";

const server = express();

server.use(morgan("dev"));
server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json());

server.use(routes);
server.listen(3000);
