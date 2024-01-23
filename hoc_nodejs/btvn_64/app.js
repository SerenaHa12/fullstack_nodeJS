require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localPassport = require("./passports/local.passport");
const googlePassport = require("./passports/google.passport");
const { User } = require("./models/index");
const authMiddleware = require("./middlewares/auth.middleware");
const guestMiddleware = require("./middlewares/guest.middleware");

// connect route
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

var app = express();

// config express-session
app.use(
  session({
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// cấu hình passport
// bắt buộc phải cấu hình passport sau session
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

passport.use("local", localPassport);
passport.use("google", googlePassport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", guestMiddleware, authRouter);
// gọi middleware auth.middleware
// cho route auth lên trên để chặn -> đăng nhập mới dc sử dụng
app.use(authMiddleware);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
