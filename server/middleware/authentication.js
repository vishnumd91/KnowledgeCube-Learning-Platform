import jwt from "jsonwebtoken";

export const userAuthentication = (req, res, next) => {
  // This line will parse the token from cookie using cookie parser.
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("Token not found");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decodedInfo) => {
    if (err) {
      console.log(err);
      return res.status(403).json("Token is invalid");
    }
    req.email = decodedInfo.email;
    next();
  });
};
