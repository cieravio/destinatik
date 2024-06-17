import * as userService from "../services/user-service.js";
// import { authorizationUrl } from "../app/oauth.js";

export const register = async (req, res, next) => {
  try {
    req = req.body;

    const result = await userService.register(req);

    res.status(201).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    req = req.body;

    const result = await userService.login(req);

    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// export const forgotPassword = async (req, res, next) => {
//   try {
//     const { email } = req.body;

//     const result = await userService.forgotPassword(email);

//     res.status(200).json({
//       message: "Password reset email sent",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const resetPassword = async (req, res, next) => {
//   try {
//     const { token, newPassword } = req.body;

//     const result = await userService.resetPassword(token, newPassword);

//     res.status(200).json({
//       message: "Password reset successsful",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const oauth2Client = async (req, res, next) => {
//   try {
//     res.redirect(authorizationUrl);
//   } catch (error) {
//     next(error);
//   }
// };

// export const oauth2Callback = async (req, res, next) => {
//   try {
//     const { code } = req.query;

//     const result = await userService.oauth2Callback(code);

//     res.status(200).json({
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const logout = async (req, res, next) => {
//   try {
//     const { token } = req.headers["authorization"]?.split(" ")[1];

//     await userService.logout(token);

//     res.status(200).json({
//       message: "Logout successful",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const setFavorite = async (req, res, next) => {
//   try {
//     const userId = await authMiddleware(req, res);
//     const { placeId } = req.body;

//     const result = await userService.setFavorite(userId, placeId);

//     res.status(200).json({
//       message: "Favorite set successfully",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const getFavorite = async (req, res, next) => {
//   try {
//     const userId = await authMiddleware(req, res);

//     const result = await userService.getFavorite(userId);

//     res.status(200).json({
//       message: "Favorites retrieved successfully",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
