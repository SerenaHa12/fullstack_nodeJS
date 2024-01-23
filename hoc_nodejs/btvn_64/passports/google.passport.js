const { User, Provider } = require("../models/index");
const GoogleStrategy = require("passport-google-oauth20");
module.exports = new GoogleStrategy(
  {
    clientID:
      "586167629359-oq45bi4pchut06k727koldvafc5hvpcu.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
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
