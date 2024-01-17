const emailsModel = require("../models/mails.model");
const moment = require("moment");
const { object, string } = require("yup");
// console.log(object);

module.exports = {
  index: async (req, res) => {
    // Đọc dữ liệu từ database
    const emails = await emailsModel.all();
    // console.log(emails);
    const msg = req.flash("msg");
    res.render("users/index", { emails, moment, msg });
  },
  add: (req, res) => {
    // const errors = req.flash("errors");
    // console.log(errors);
    console.log(req.errors, "1");
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const schema = object({
      email: string()
        .required("Please enter a email")
        .email("Please enter a valid email"),
      title: string().required("Please enter a title"),
      description: string().required("Please enter a description"),
    });
    try {
      const body = await schema.validate(req.body, { abortEarly: false });
      console.log(body);
      body.status = body.status === "1" ? true : false;
      await emailsModel.create(body);
      req.flash("msg", "Gửi email thành công");
      return res.redirect("/users");
    } catch (e) {
      const errors = Object.fromEntries(
        e?.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
      req.flash("old", req.body);
    }
    return res.redirect("/users/add");
  },
};

// email: string().required("Please enter a email"),
//       title: string().required("Please enter a title"),
//       description: string().required("Please enter a description"),
