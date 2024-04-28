const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = (req, res) => {
  res.status(200).send("Welcome to home page from controller");
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log("userExist : ", userExist);
    if (userExist) {
      return res.status(500).json({ msg: "User already exist" });
    }
    const newUser = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: "User created",
      Token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ error: "Registration error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(500).json({ msg: "SignUp first" });
    }
    const validPass = await userExist.comparePassword(password);
    if (validPass) {
      res.status(200).json({
        msg: "Login Successful",
        Token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(500).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ Error: "Invalid credential" });
  }
};

module.exports = { home, register, login };
