const { User, Provider } = require("../models/index");

const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const passportLocal = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    const provider = await Provider.findOne({
      where: { name: "email" },
    });
    // sử lý xác thực email và pasword có tồn tại trong database không
    const user = await User.findOne({
      where: {
        email,
        provider_id: provider.id,
      },
    });

    if (!user) {
      return done(null, false, { message: "Email không tồn tại" });
    }

    const passwordHash = user.password; //lấy password từ database
    const result = bcrypt.compareSync(password, passwordHash);
    if (result) {
      return done(null, user); //lưu user vào session
    }

    done(null, { message: "Mật khẩu không chính xác" });
  }
);

module.exports = passportLocal;
