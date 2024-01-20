const moment = require("moment");
const model = require("../models/index");
const User = model.User;

// thêm object toán tử của sequelize
const { Op } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    const { status, keyword } = req.query;
    const filter = {};
    if (status === "active" || status === "inactive") {
      filter.status = status === "active" ? true : false;
    }
    if (keyword) {
      // cách làm đơn từng thuộc tính
      // filter.email = { [Op.like]: `%${keyword.toLowerCase()}%` };

      // gộp
      // iLike là một toán tử trong postgres không phân biệt chữ hoa chữ thường
      filter[Op.or] = [
        {
          name: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.iLike]: `%${keyword}%`,
          },
        },
      ];
    }
    //   test xem có nhận model không
    // findAll là phương thức của sequelize dùng để lấy tất cả các dữ liệu

    /**
     * Sử dụng phương thức: find and Count all -> trả về tổng số bản ghi và limit
     */
    const limit = 3; // sau này đưa limit vào file config
    const { page = 1 } = req.query;
    const offset = (page - 1) * limit;
    const { rows: users, count } = await User.findAndCountAll({
      // 1. sắp xếp id theo chiều tăng dần
      order: [["id", "desc"]],
      where: filter,
      limit,
      offset,

      // 2. lấy những users có status kích hoạt
      // where: { status: true },

      // 3. tìm kiếm theo line: ví dụ: ha
      // where: {
      //   email: {
      //     [Op.like]: "%user%",
      //     // SELECT "id", "name", "email", "status", "created_at", "updated_at" FROM "users" AS "User" WHERE "User"."email" LIKE '%ha%' ORDER BY "User"."id" DESC
      //   },
      // },

      // 4. tìm theo 2 điều kiện: vừa kích hoạt vừa filter theo tên
    });
    console.log(count);
    // console.log("users", users);
    const totalPage = Math.ceil(count / limit);
    res.render("users/index", { users, moment, totalPage, page });
  },

  // get add form
  add: (req, res) => {
    res.render("users/add");
  },

  // handle add form
  handleAdd: async (req, res, next) => {
    const body = req.body;
    // console.log(body);

    // để thêm dữ liệu
    try {
      const user = await User.create(body);
      console.log(user);
      if (user) {
        return res.redirect("/users");
      }
    } catch (e) {
      return next(e); // gọi error handler
    }

    // res.send("submit");
  },

  // get edit form
  edit: async (req, res, next) => {
    // muốn có dữ liệu phải truy vấn
    // bước 1: lấy ra id
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: { id },
      });

      if (!user) {
        throw new Error("User không tồn tại");
      }
      res.render("users/edit", { user });
    } catch (e) {
      return next(e);
    }

    /**
     * 2 phương thức để trả về 1 bản ghi
     * - 1. findByPk -> truyền vào primary key
     * - không trả về 1 mảng chỉ trả về object
     * - 2. findOne: áp dụng cho các trường hợp không có filter theo primary key
     */

    // Cách 1: findByPk
    // const user = await User.findByPk(id);
    // console.log(user);

    // Cách 2: findOne
    // const user = await User.findOne({
    //   where: { id },
    // });
    // console.log(user);
  },

  // handle edit form
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    await User.update(body, {
      where: { id },
    });
    return res.redirect("/users/edit/" + id);
  },

  // delete a user
  delete: async (req, res) => {
    const { id } = req.params;
    await User.destroy({
      where: { id },
      force: true, // xóa vĩnh viễn
    });
    return res.redirect("/users");
    // res.send(id);
  },
};

/**
 * Ví dụ về việc INSERT dữ liệu vào 1 bảng
 * Products --> Lấy product_id vừa insert -->
 * Insert vào bảng product_images (product_id là khóa ngoại)
 */

/**
 * Thuật toán phân trang
  - Lấy tổng số bản ghi (Bao gồm cả kết quả lọc)
  - Xác định giới hạn bản ghi trên 1 trang
  - Tính tổng số trang: Tổng số bản ghi / Giới hạn 1 trang ==> Làm tròn lên
  - Tính offset dựa vào page: offset = (page - 1) * limit
  - Đưa limit, offset vào query (sql, orm)
  - Xử lý hiển thị: Danh sách, phân trang
 *
 */
