import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function auth(req, res, next) {
  console.log("AUTH middleware here");
  console.log("AUTH middleware here", req.cookies
  );

  try {
    const token = req.cookies.access_token;
    if (!token) return res.send({ success: false, error: "Secret ID not provied"}); // checks if there is such a cookie

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decodedToken:", decodedToken);

    if (!decodedToken.id) return res.send({ success: false, errorId:"Token mis matched" }); // no id in the token

    req.user = decodedToken.id;

    next();
  } catch (error) {
    console.log(" error in AUTH:", error.message);
    res.send({ success: false, errorId: error.message });
  }
}