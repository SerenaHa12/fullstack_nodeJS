const LoginHtml = /*html*/ `
    <!-- login form -->
    <form class="login">
    <h1 class="mb-6">login</h1>
    <div class="mb-3 login-email">
        <label for="exampleInputEmail1" class="form-label login-email_label"
        >Email address</label
        >
        <input
        type="email"
        class="form-control login-email_input"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text login-email_text">
        We'll never share your email with anyone else.
        </div>
    </div>
    <div class="mb-3 login-password">
        <label
        for="exampleInputPassword1"
        class="form-label login-password_label"
        >Password</label
        >
        <input
        type="password"
        class="form-control login-password_input"
        id="exampleInputPassword1"
        />
    </div>
    <button type="submit" class="mb-3 mx-auto btn btn-primary login-submit_btn mx-auto" style="display: block;">
        Submit
    </button>
    <p class="form-text text-center">or donot have an account</p>
    <p class="text-center"><a href="./register.html" class="link-underline-primary text-center login-register_btn">Register</a></p>
    </form>`;

export default LoginHtml;
