const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must contain atleast 3 chars." })
    .max(100, { message: "Username is too long" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(9, { message: "Email must contain atleast 9 chars." })
    .max(100, { message: "Email is too long" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must contain atleast 10 chars." })
    .max(11, { message: "Invalid phone" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password is too weak." })
    .max(100, { message: "Password is too long" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(9, { message: "Email must contain atleast 9 chars." })
    .max(100, { message: "Email is too long" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password is too weak." })
    .max(100, { message: "Password is too long" }),
});

module.exports = { signupSchema, loginSchema };
