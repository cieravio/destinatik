import { ResponseError } from "../error/response-error";

export const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    return res
      .status(err.status)
      .json({
        message: error.message,
      })
      .end();
  } else {
    return res.status(500).json({ message: err.message }).end();
  }
};
