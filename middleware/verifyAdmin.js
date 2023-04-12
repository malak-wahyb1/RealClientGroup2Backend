import jwt from "jsonwebtoken";
const jwtSecret =
  "40be2a3b6ca97b8544c563c0e5a51b7e6c8fff10db237a078cf0ab16198c6d7094da33";
export default function adminAuth (req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
}
