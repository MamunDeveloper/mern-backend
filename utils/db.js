const mongoose = require("mongoose");

URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("CONNECTED...");
  } catch (error) {
    console.log("Connection failed with database");
    process.exit(0);
  }
};

module.exports = connectDb;
