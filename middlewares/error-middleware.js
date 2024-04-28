const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const details = err.details || "Backend server error";
  res.status(status).json({ message, details });
};

module.exports = errorMiddleware;
