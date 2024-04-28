const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function () {
  const hash_password = await bcrypt.hash(this.password, 10);
  return (this.password = hash_password);
});

userSchema.methods.generateToken = async function () {
  return JWT.sign(
    {
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "30d" }
  );
};

userSchema.methods.comparePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};

const User = new model("User", userSchema);
module.exports = User;
