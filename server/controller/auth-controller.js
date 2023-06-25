import { User } from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Encrypting password by hashing
    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltPassword);

    const registeredUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(registeredUser);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json("email and Password is required");

  const foundUser = await User.findOne({ email });

  if (!foundUser)
    return res.status(401).json("User not Found. Please Register to Login");

  const isPasswordMatching = await bcrypt.compare(password, foundUser.password);

  if (isPasswordMatching) {
    const { email } = foundUser._doc;
    // JWT Authentication goes here
    const accessToken = jwt.sign(
      { email: email },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: "15m" }
    );
    // TODO: Refresh Token Implementation
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      //   secure: true,
      //   sameSite: "none",
    });
    res.status(201).json({ email });
  } else {
    return res.status(401).json("Invalid Credentials");
  }
};
