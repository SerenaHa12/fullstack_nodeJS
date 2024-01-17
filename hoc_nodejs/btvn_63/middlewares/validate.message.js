module.exports = (req, res, next) => {
  const getError = (errors) => {
    if (errors?.length) {
      errors = errors[0];
      return errors;
    }
  };
  const getOld = (old) => {
    if (old?.length) {
      old = old[0];
      return old;
    }
  };
  const errors = req.flash("errors");
  const old = req.flash("old");
  req.errors = getError(errors);
  req.old = getOld(old);
  next();
};
