import jwt from "jsonwebtoken";

export default function SuperAdminAuth (req, res, next) {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token,process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role !== "superAdmin") {
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
