import { userCollection } from "../app/firestore.js";
import { validateToken } from "../app/token.js";

export const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({
        message: "Unauthorized",
      })
      .end();
  }

  token = token.split(" ")[1];
  try {
    const isValid = await validateToken(token);
    if (!isValid) {
      return res
        .status(401)
        .json({
          message: "Unauthorized",
        })
        .end();
    }

    let user = await userCollection.where("token", "==", token).get();
    if (user.empty) {
      return res
        .status(401)
        .json({
          message: "Unauthorized",
        })
        .end();
    }

    const result = user.docs[0].data();
    req.result = result;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Internal Server Error",
        error: error.message,
      })
      .end();
  }
};
