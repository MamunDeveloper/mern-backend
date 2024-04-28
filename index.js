require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

// CORS options
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(errorMiddleware);
// Mount routers
app.use("/auth/api/", authRouter);
app.use("/api/form", contactRouter);


// Connect to the database and start the server
const PORT = process.env.PORT || 5000; // Use the environment variable PORT or default to 5000

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

module.exports = app; // Export the app object

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const authRouter = require("./router/auth-router");
// const contactRouter = require("./router/contact-router");
// const connectDb = require("./utils/db");
// const errorMiddleware = require("./middlewares/error-middleware");
// const app = express();

// const corseOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credential: true,
// };
// app.options("", cors(corseOptions));
// app.use(cors(corseOptions));
// app.use(express.json());

// app.use("/auth/api/", authRouter);
// app.use("/api/form", contactRouter);
// const PORT = 5000;
// app.use(errorMiddleware);
// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`App is running at port ${PORT}`);
//   });
// });
