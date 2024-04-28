const { z } = require("zod");

const contactSchema = z.object({
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
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, { message: "Message must contain atleast 10 chars." })
    .max(200, { message: "Message is too long" }),
});

module.exports = contactSchema;
