module.exports = (app) => {
  require("./admin")(app);
  require("./web")(app);
};
