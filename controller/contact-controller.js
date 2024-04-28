const Contact = require("../models/contact-model");

const contact = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;
    const newMessage = await Contact.create({ username, email, message });
    console.log(newMessage);
    res.status(201).json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ Error: "Message sent failed" });
  }
};

module.exports = { contact };
