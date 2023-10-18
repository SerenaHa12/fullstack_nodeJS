// import { config } from "./config.js";
// import { client } from "./client.js";
import { hanldeSubmitSignUp, hanldeSubmitSignIn } from "./handle.js";

// const { SERVER_AUTH_API } = config;

// client.setUrl(SERVER_AUTH_API);

const root = document.querySelector("#root");
console.log(root);

// welcome
const welcomeHTML = () => {
  var welcomeDiv = document.createElement("div");
  welcomeDiv.className = "welcome";

  var header = document.createElement("header");

  var preHeaderDiv = document.createElement("div");
  preHeaderDiv.className = "pre-header";

  var preHeaderInfoDiv = document.createElement("div");
  preHeaderInfoDiv.className = "pre-header_info";

  var preHeaderWeatherDiv = document.createElement("div");
  preHeaderWeatherDiv.className = "pre-header_weather";

  var sunIcon = document.createElement("i");
  sunIcon.className = "fa-solid fa-sun";

  var weatherParagraph = document.createElement("p");
  weatherParagraph.textContent = "30 Viet Nam";

  preHeaderWeatherDiv.appendChild(sunIcon);
  preHeaderWeatherDiv.appendChild(weatherParagraph);

  var preHeaderTimeDiv = document.createElement("div");
  preHeaderTimeDiv.className = "pre-header_time";

  var clockIcon = document.createElement("i");
  clockIcon.className = "fa-regular fa-clock";

  var timeParagraph = document.createElement("p");
  timeParagraph.textContent = "Monday, 10 January 2021";

  preHeaderTimeDiv.appendChild(clockIcon);
  preHeaderTimeDiv.appendChild(timeParagraph);

  var breakingNewsButton = document.createElement("button");
  breakingNewsButton.textContent = "Breaking News";

  var newsParagraph = document.createElement("p");
  newsParagraph.textContent =
    "Indonesia says located black box recorders from crashed plane";

  preHeaderInfoDiv.appendChild(preHeaderWeatherDiv);
  preHeaderInfoDiv.appendChild(preHeaderTimeDiv);
  preHeaderInfoDiv.appendChild(breakingNewsButton);
  preHeaderInfoDiv.appendChild(newsParagraph);

  var preHeaderSocialDiv = document.createElement("div");
  preHeaderSocialDiv.className = "pre-header_social";

  var facebookIcon = document.createElement("i");
  facebookIcon.className = "fa-brands fa-facebook";
  preHeaderSocialDiv.appendChild(facebookIcon);

  var twitterIcon = document.createElement("i");
  twitterIcon.className = "fa-brands fa-twitter";
  preHeaderSocialDiv.appendChild(twitterIcon);

  var instagramIcon = document.createElement("i");
  instagramIcon.className = "fa-brands fa-instagram";
  preHeaderSocialDiv.appendChild(instagramIcon);

  var youtubeIcon = document.createElement("i");
  youtubeIcon.className = "fa-brands fa-youtube";
  preHeaderSocialDiv.appendChild(youtubeIcon);

  var headerDiv = document.createElement("div");
  headerDiv.className = "header";

  var headerLogoDiv = document.createElement("div");
  headerLogoDiv.className = "header-logo";

  var logoImage = document.createElement("img");
  logoImage.src = "./asset/logo.png";
  logoImage.alt = "logo";

  headerLogoDiv.appendChild(logoImage);

  var navList = document.createElement("ul");

  var navItems = [
    { text: "Home", class: "active" },
    { text: "International" },
    { text: "Sports" },
    { text: "Lifestyle" },
    { text: "Business" },
    { text: "Technology" },
  ];

  navItems.forEach(function (item) {
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.href = "#";
    anchor.textContent = item.text;
    if (item.class) {
      anchor.className = item.class;
    }
    li.appendChild(anchor);
    navList.appendChild(li);
  });

  var headerSearchDiv = document.createElement("div");
  headerSearchDiv.className = "header-search";

  var searchIcon = document.createElement("i");
  searchIcon.className = "fa-solid fa-magnifying-glass";

  var signInLink = document.createElement("a");
  signInLink.href = "#";
  signInLink.className = "signinBtnWelcome";
  signInLink.textContent = "Sign In";

  var signUpLink = document.createElement("a");
  signUpLink.href = "#";
  signUpLink.className = "signupBtnWelcome";
  signUpLink.textContent = "Sign Up";

  headerSearchDiv.appendChild(searchIcon);
  headerSearchDiv.appendChild(signInLink);
  headerSearchDiv.appendChild(signUpLink);

  var mainElement = document.createElement("main");

  var newsHeading = document.createElement("h1");
  newsHeading.textContent = "News";

  var newsContainerDiv = document.createElement("div");
  newsContainerDiv.className = "news-container";
  newsContainerDiv.id = "news-container";

  var loadingDiv = document.createElement("div");
  loadingDiv.id = "loading";
  loadingDiv.className = "loading";
  loadingDiv.textContent = "Loading...";

  mainElement.appendChild(newsHeading);
  mainElement.appendChild(newsContainerDiv);
  mainElement.appendChild(loadingDiv);

  welcomeDiv.appendChild(header);
  header.appendChild(preHeaderDiv);
  header.appendChild(headerDiv);
  welcomeDiv.appendChild(mainElement);

  preHeaderDiv.appendChild(preHeaderInfoDiv);
  preHeaderDiv.appendChild(preHeaderSocialDiv);

  headerDiv.appendChild(headerLogoDiv);
  headerDiv.appendChild(navList);
  headerDiv.appendChild(headerSearchDiv);

  root.appendChild(welcomeDiv);
};

// sign up
const signupHTMl = () => {
  var signupDiv = document.createElement("div");
  signupDiv.className = "signup";

  var contentDiv = document.createElement("div");
  contentDiv.className = "content";

  var image = document.createElement("img");
  image.src = "./asset/Side-Background-Outer.png";
  image.alt = "background";

  var formSignupDiv = document.createElement("div");
  formSignupDiv.className = "formSignup";

  var form = document.createElement("form");
  form.classList.add("formSignUp");
  form.action = "";

  var h2 = document.createElement("h2");
  h2.textContent = "Sign Up";
  var paragraph = document.createElement("p");
  paragraph.textContent = "Please enter your name and password.";

  var nameDiv = document.createElement("div");
  var nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Enter Your Name";
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = "chi";
  nameInput.className = "nameInput";
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  var emailDiv = document.createElement("div");
  var emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Enter Your Email";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "emailInput";
  emailInput.value = "chi@gmail.com";
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  var passwordDiv = document.createElement("div");
  var passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  passwordLabel.textContent = "Enter Your Password";
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.value = "12345678";
  passwordInput.className = "passwordInput";
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  var signupButton = document.createElement("button");
  signupButton.className = "signupBtn";
  signupButton.textContent = "Sign Up";

  var optionParagraph = document.createElement("p");
  optionParagraph.className = "option";
  optionParagraph.textContent = "or";

  var signinButton = document.createElement("div");
  signinButton.className = "signinBtn";
  signinButton.textContent = "Sign In";
  signinButton.addEventListener("click", () => {
    const signin = document.querySelector(".signin");
    const signup = document.querySelector(".signup");
    signup.classList.remove("show");
    signin.classList.add("show");
  });

  var backDiv = document.createElement("div");
  backDiv.className = "back";

  var iElement = document.createElement("i");
  iElement.className = "fa-solid fa-arrow-left";
  iElement.addEventListener("click", () => {
    const signin = document.querySelector(".signin");
    const signup = document.querySelector(".signup");
    const welcome = document.querySelector(".welcome");
    signup.classList.remove("show");
    welcome.classList.remove("hide");
  });

  form.appendChild(h2);
  form.appendChild(paragraph);
  form.appendChild(nameDiv);
  form.appendChild(emailDiv);
  form.appendChild(passwordDiv);
  form.appendChild(signupButton);
  form.appendChild(optionParagraph);
  form.appendChild(signinButton);

  backDiv.appendChild(iElement);

  formSignupDiv.appendChild(form);
  contentDiv.appendChild(image);
  contentDiv.appendChild(formSignupDiv);
  contentDiv.appendChild(backDiv);

  signupDiv.appendChild(contentDiv);
  root.appendChild(signupDiv);

  const formSignUp = document.querySelector(".formSignUp");
  formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameEl = e.target.querySelector(".nameInput");
    const emailEl = e.target.querySelector(".emailInput");
    const passEl = e.target.querySelector(".passwordInput");
    const name = nameEl.value;
    const email = emailEl.value;
    const password = passEl.value;
    console.log(name, email, password);

    hanldeSubmitSignUp({ name, email, password });
    nameEl.value = "";
    emailEl.value = "";
    passEl.value = "";
  });
};

const handleSignUp = () => {
  const signUpBtnWelcome = document.querySelector(".signupBtnWelcome");
  console.log(signUpBtnWelcome);
  const signup = document.querySelector(".signup");
  const welcome = document.querySelector(".welcome");
  signUpBtnWelcome.addEventListener("click", () => {
    signup.classList.add("show");
    welcome.classList.add("hide");
  });
};

// sign in
const signinHTML = () => {
  var signinDiv = document.createElement("div");
  signinDiv.className = "signin";
  var contentDiv = document.createElement("div");
  contentDiv.className = "content";
  var image = document.createElement("img");
  image.src = "./asset/Side-Background-Outer.png";
  image.alt = "background";
  var formSignupDiv = document.createElement("div");
  formSignupDiv.className = "formSignup";

  var form = document.createElement("form");
  form.classList.add("formSignIn");
  form.action = "";

  var h2 = document.createElement("h2");
  h2.textContent = "Sign In";

  var paragraph = document.createElement("p");
  paragraph.textContent = "Please enter your email and password.";

  var emailDiv = document.createElement("div");

  var emailLabel = document.createElement("label");
  emailLabel.htmlFor = "name";
  emailLabel.textContent = "Enter Your Email";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.value = "chi@gmail.com";
  emailInput.className = "emailInput";

  var passwordDiv = document.createElement("div");
  var passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "name";
  passwordLabel.textContent = "Enter Your Password";
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.className = "passwordInput";
  passwordInput.value = "12345678";

  var signinButton = document.createElement("button");
  signinButton.className = "signupBtn";
  signinButton.textContent = "Sign In";

  var optionParagraph = document.createElement("p");
  optionParagraph.className = "option";
  optionParagraph.textContent = "or";

  var signupButton = document.createElement("div");
  signupButton.className = "signinBtn";
  signupButton.textContent = "Sign Up";
  signupButton.addEventListener("click", () => {
    const signin = document.querySelector(".signin");
    const signup = document.querySelector(".signup");
    signin.classList.remove("show");
    signup.classList.add("show");
  });

  var backDiv = document.createElement("div");
  backDiv.className = "back";

  var iElement = document.createElement("i");
  iElement.className = "fa-solid fa-arrow-left";
  iElement.addEventListener("click", () => {
    const signin = document.querySelector(".signin");
    const signup = document.querySelector(".signup");
    const welcome = document.querySelector(".welcome");
    signin.classList.remove("show");
    welcome.classList.remove("hide");
  });

  form.appendChild(h2);
  form.appendChild(paragraph);
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);
  form.appendChild(emailDiv);
  form.appendChild(passwordDiv);
  form.appendChild(signinButton);
  form.appendChild(signinButton);
  form.appendChild(optionParagraph);
  form.appendChild(signupButton);

  backDiv.appendChild(iElement);

  formSignupDiv.appendChild(form);
  contentDiv.appendChild(image);
  contentDiv.appendChild(formSignupDiv);
  contentDiv.appendChild(backDiv);

  signinDiv.appendChild(contentDiv);
  root.appendChild(signinDiv);

  const formSignIn = document.querySelector(".formSignIn");
  formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailEl = e.target.querySelector(".emailInput");
    const passEl = e.target.querySelector(".passwordInput");
    const email = emailEl.value;
    const password = passEl.value;
    console.log(email, password);

    if (hanldeSubmitSignIn({ email, password })) {
      const welcome = document.querySelector(".welcome");
      const signin = document.querySelector(".signin");
      signin.classList.add("hide");
      welcome.classList.remove("hide");
      // const signin = document.querySelector('signin');
      // signin.classList.remove('show')
      // welcomeHTML();
    }
    emailEl.value = "";
    passEl.value = "";
  });
};

const newHTML = () => {
  var welcomeDiv = document.createElement("div");
  welcomeDiv.className = "welcome";

  var header = document.createElement("header");

  var preHeaderDiv = document.createElement("div");
  preHeaderDiv.className = "pre-header";

  var preHeaderInfoDiv = document.createElement("div");
  preHeaderInfoDiv.className = "pre-header_info";

  var preHeaderWeatherDiv = document.createElement("div");
  preHeaderWeatherDiv.className = "pre-header_weather";

  var sunIcon = document.createElement("i");
  sunIcon.className = "fa-solid fa-sun";

  var weatherParagraph = document.createElement("p");
  weatherParagraph.textContent = "30 Viet Nam";

  preHeaderWeatherDiv.appendChild(sunIcon);
  preHeaderWeatherDiv.appendChild(weatherParagraph);

  var preHeaderTimeDiv = document.createElement("div");
  preHeaderTimeDiv.className = "pre-header_time";

  var clockIcon = document.createElement("i");
  clockIcon.className = "fa-regular fa-clock";

  var timeParagraph = document.createElement("p");
  timeParagraph.textContent = "Monday, 10 January 2021";

  preHeaderTimeDiv.appendChild(clockIcon);
  preHeaderTimeDiv.appendChild(timeParagraph);

  var breakingNewsButton = document.createElement("button");
  breakingNewsButton.textContent = "Breaking News";

  var newsParagraph = document.createElement("p");
  newsParagraph.textContent =
    "Indonesia says located black box recorders from crashed plane";

  preHeaderInfoDiv.appendChild(preHeaderWeatherDiv);
  preHeaderInfoDiv.appendChild(preHeaderTimeDiv);
  preHeaderInfoDiv.appendChild(breakingNewsButton);
  preHeaderInfoDiv.appendChild(newsParagraph);

  var preHeaderSocialDiv = document.createElement("div");
  preHeaderSocialDiv.className = "pre-header_social";

  var facebookIcon = document.createElement("i");
  facebookIcon.className = "fa-brands fa-facebook";
  preHeaderSocialDiv.appendChild(facebookIcon);

  var twitterIcon = document.createElement("i");
  twitterIcon.className = "fa-brands fa-twitter";
  preHeaderSocialDiv.appendChild(twitterIcon);

  var instagramIcon = document.createElement("i");
  instagramIcon.className = "fa-brands fa-instagram";
  preHeaderSocialDiv.appendChild(instagramIcon);

  var youtubeIcon = document.createElement("i");
  youtubeIcon.className = "fa-brands fa-youtube";
  preHeaderSocialDiv.appendChild(youtubeIcon);

  var headerDiv = document.createElement("div");
  headerDiv.className = "header";

  var headerLogoDiv = document.createElement("div");
  headerLogoDiv.className = "header-logo";

  var logoImage = document.createElement("img");
  logoImage.src = "./asset/logo.png";
  logoImage.alt = "logo";

  headerLogoDiv.appendChild(logoImage);

  var navList = document.createElement("ul");

  var navItems = [
    { text: "Home", class: "active" },
    { text: "International" },
    { text: "Sports" },
    { text: "Lifestyle" },
    { text: "Business" },
    { text: "Technology" },
  ];

  navItems.forEach(function (item) {
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.href = "#";
    anchor.textContent = item.text;
    if (item.class) {
      anchor.className = item.class;
    }
    li.appendChild(anchor);
    navList.appendChild(li);
  });

  var headerSearchDiv = document.createElement("div");
  headerSearchDiv.className = "header-search";

  var searchIcon = document.createElement("i");
  searchIcon.className = "fa-solid fa-magnifying-glass";

  var logoutLink = document.createElement("a");
  logoutLink.href = "#";
  logoutLink.className = "logoutBtn";
  signInLink.textContent = "Logout";

  headerSearchDiv.appendChild(searchIcon);
  headerSearchDiv.appendChild(signInLink);
  headerSearchDiv.appendChild(signUpLink);

  var mainElement = document.createElement("main");

  var newsHeading = document.createElement("h1");
  newsHeading.textContent = "News";

  var newsContainerDiv = document.createElement("div");
  newsContainerDiv.className = "news-container";
  newsContainerDiv.id = "news-container";

  var loadingDiv = document.createElement("div");
  loadingDiv.id = "loading";
  loadingDiv.className = "loading";
  loadingDiv.textContent = "Loading...";

  mainElement.appendChild(newsHeading);
  mainElement.appendChild(newsContainerDiv);
  mainElement.appendChild(loadingDiv);

  welcomeDiv.appendChild(header);
  header.appendChild(preHeaderDiv);
  header.appendChild(headerDiv);
  welcomeDiv.appendChild(mainElement);

  preHeaderDiv.appendChild(preHeaderInfoDiv);
  preHeaderDiv.appendChild(preHeaderSocialDiv);

  headerDiv.appendChild(headerLogoDiv);
  headerDiv.appendChild(navList);
  headerDiv.appendChild(headerSearchDiv);

  root.appendChild(newDiv);
};

const handleSignIn = () => {
  const signInBtnWelcome = document.querySelector(".signinBtnWelcome");
  console.log(signInBtnWelcome);
  const signin = document.querySelector(".signin");
  const welcome = document.querySelector(".welcome");
  signInBtnWelcome.addEventListener("click", () => {
    signin.classList.add("show");
    welcome.classList.add("hide");
  });
};

export const render = () => {
  welcomeHTML();
  signupHTMl();
  handleSignUp();
  signinHTML();
  handleSignIn();
};
