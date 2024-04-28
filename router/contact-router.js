const express = require("express");
const { contact } = require("../controller/contact-controller");
const validate = require("../middlewares/validator-middleware");
const contactSchema = require("../validator/contact-validator");
const router = express.Router();

router.route("/contact").post(validate(contactSchema), contact);
module.exports = router;
