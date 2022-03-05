import express from "express";
import authRouter from "./auth";
import userRouter from "./user";

const routes = new express();

routes.use("/users", userRouter);
routes.use("/auth", authRouter);

routes.use((req, res, next) => {
  const error = new Error("Router not found");
  error.status = 404;

  next(error);
});

routes.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

export default routes;
