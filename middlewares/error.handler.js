const { ValidationError } = require('sequelize');
/** funtion error de midleware**/

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
};

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
};

/** midleware de tipo boom*/
function boomerrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }
  next(err);
};
function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err);
};


module.exports = {
  logErrors,
  errorHandler,
  boomerrorHandler,
  ormErrorHandler
};
