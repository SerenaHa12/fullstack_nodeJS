const RegisterHtml = /*html*/ `
    <!-- register form -->
    <form class="register">
    <h1 class="mb-6">register</h1>
    <div class="mb-3 register-name">
        <label for="exampleInputname1" class="form-label register-name_label"
        >Name</label
        >
        <input
        type="name"
        class="form-control register-name_input"
        id="exampleInputname1"
        aria-describedby="nameHelp"
        />
    </div>
    <div class="mb-3 register-email">
        <label for="exampleInputEmail1" class="form-label register-email_label"
        >Email address</label
        >
        <input
        type="email"
        class="form-control register-email_input"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text register-email_text">
        We'll never share your email with anyone else.
        </div>
    </div>
    <div class="mb-3 register-password">
        <label
        for="exampleInputPassword1"
        class="form-label register-password_label"
        >Password</label
        >
        <input
        type="password"
        class="form-control register-password_input"
        id="exampleInputPassword1"
        />
    </div>
    <button type="submit" class="mb-3 btn btn-primary register-submit_btn mx-auto" style="display:block;">
        Submit
    </button>
    <p class="form-text text-center">already have an account</p>
    <p class="text-center"><a href="./login.html" class="link-underline-primary text-center register-login_btn">Login</a></p>
    </form>`;

export default RegisterHtml;
