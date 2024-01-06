const moment = require("moment");
const model = require("../models/index");
const User = model.User;
const { Op } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filter = {};
    if (status === "active" || status === "inactive") {
      filter.status = status === "active" ? true : false;
    }
    const users = await User.findAll({
      // order: [["id", "decs"]],
      // where: {
      //   status: true,
      // },
    });
    res.render("users/index", { users, moment });
  },
};
