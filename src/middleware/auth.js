import { verify } from "jsonwebtoken";

const middlewareConfig = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = verify(token, "secret");

    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Not authorized",
    });
  }
};

export default middlewareConfig;
