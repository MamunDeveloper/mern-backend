const validate = (schema) => async (req, res, next) => {
  try {
    const response = await schema.parseAsync(req.body);
    console.log(response);
    req.body = response;
    next();
  } catch (error) {
    const message = error.errors[0].code;
    const details = error.errors[0].message;
    const errobj = {
      message,
      details,
    };
    next(errobj);
  }
};

module.exports = validate;
