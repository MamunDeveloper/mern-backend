const express = require("express");
const { home, register, login } = require("../controller/auth-controller");
const validate = require("../middlewares/validator-middleware");
const { signupSchema, loginSchema } = require("../validator/auth-validator");
const router = express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema), login);

module.exports = router;
