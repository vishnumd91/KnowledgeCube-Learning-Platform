export const errorHandler = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.status ? err.status : 500;

  return res.status(statusCode).json({
    error: err.name,
    message: err.message,
    stackTrace: err.stack,
  });
};
