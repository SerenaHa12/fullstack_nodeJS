require("dotenv").config();

const { User, Provider } = require("../models/index");
const GoogleStrategy = require("passport-google-oauth20");
module.exports = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: ["profile", "email"],
    state: true,
  },
  async (accessToken, refreshToken, profile, cb) => {
    // lấy thông tin user từ db || thêm user từ db
    // nếu tồn tại user -> lấy
    // lưu ý: kiểm tra provider và email
    // console.log(profile);

    const {
      displayName: name,
      emails: [{ value: email }],
    } = profile;
    // console.log(name, email);

    // kiểm tra provider
    // nếu tồn tại --> lấy provider cũ
    // nếu k có --> thêm mới
    const provider = await Provider.findOrCreate({
      where: {
        name: "google",
      },
      defaults: {
        name: "google",
      },
    });
    // console.log(provider);

    // kiểm tra user
    // nếu tồn tại --> lấy uesr cũ
    // nếu k có --> thêm mới
    const user = await User.findOrCreate({
      where: {
        email,
        provider_id: provider[0].id,
      },
      defaults: {
        fullname: name,
        email,
        status: true,
        provider_id: provider[0].id,
      },
    });

    cb(null, user[0]);
  }
);
