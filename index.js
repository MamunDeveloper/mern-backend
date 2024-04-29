require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

const corseOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credential: true,
};
app.options("", cors(corseOptions));
app.use(cors(corseOptions));
app.use(express.json());

app.use("/auth/api/", authRouter);
app.use("/api/form", contactRouter);
const PORT = 5000;
app.use(errorMiddleware);
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the backend server" });
});
