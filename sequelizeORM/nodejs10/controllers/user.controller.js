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
  add: (req, res) => {
    res.render("add");
  },
  handleAdd: async (req, res, next) => {
    const body = req.body;
    try {
      const user = await User.create(body);
      if (user) {
        return res.redirect("/users");
      }
    } catch (err) {
      return next(err);
    }
  },
  edit: async (req, res) => {
    // res.render("users/edit");
    const { id } = req.params;
    res.render("users/edit");
    try {
      const user = await User.findOne({
        where: { id },
      });
      // console.log(user);

      if (user) {
        throw new Error("User không tồn tại");
      }

      response.render("users/edit", { user });
    } catch (err) {
      return next(err);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    await User.update(body, {
      where: { id },
    });
    return res.redirect("/users/edit" + id);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.redirect("/users");
  },
};

/**
 * Ví dụ về việc insert dữ liệu vào nhiều bảng
 * Products -> Lấy product_id ->
 *
 * Thuật toán phân trang
 * - Tính được tổng số bản ghi (bao gồm cả kết quả lọc)
 * - Xác định limit giới hạn bản ghi trên 1 trang
 * - Tính tổng số trang : Tổng số bản ghi / giới hạn 1 trang -. Làm tròn lên
 * - Tính offset dựa vào page
 * -> offset = (page - 1) * limit
 * đưa limit offser vào query (orm sql)
 * -> xứ lý hiển thị: Danh sách phân trang
 */
