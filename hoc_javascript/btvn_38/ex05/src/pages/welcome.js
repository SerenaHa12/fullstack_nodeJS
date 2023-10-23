import LoginHtml from "./login.js";
import RegisterHtml from "./register.js";

const WelcomeHtml = /*html*/ `
    <!-- login form -->
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Contact</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Page</a>
                </li>
            </ul>
            <div class="navbar mx-2">
                <li class="nav-item mx-4">
                    <a class="nav-link login-navlink" href="./login.html">Sign In</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link register-navlink" href="./register.html">Register</a>
                </li>
            </div>
            </div>
        </div>
    </nav>
`;

const handleWelcome = () => {
  const loginNavlink = document.querySelector(".login-navlink");
  const registerNavlink = document.querySelector(".register-navlink");
  loginNavlink.addEventListener("click", () => {
    const root = document.querySelector(".root");
    root.innerHTML = LoginHtml;
  });
  registerNavlink.addEventListener("click", () => {
    const root = document.querySelector(".root");
    root.innerHTML = RegisterHtml;
  });
};

export { WelcomeHtml, handleWelcome };
