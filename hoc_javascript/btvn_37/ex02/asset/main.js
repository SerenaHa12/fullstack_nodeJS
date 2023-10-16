import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
// console.log(SERVER_AUTH_API);

client.setUrl(SERVER_AUTH_API);
// console.log(client);
const root = document.querySelector("#root");
// const render = () => {
//   const registerHTML = ``;
//   const welcomeHTML = ``;
//   const loginHTML = ``;

//   if (localStorage.getItem("access_token")) {
//     root.innerHTML = welcomeHTML;
//     const logout = root.querySelector(".profile .logout");
//     console.log(root);
//     logout?.addEventListener("click", (e) => {
//       e.preventDefault();
//       localStorage.removeItem("access_token");
//       localStorage.removeItem("refresh_token");
//       render();
//     });
//   } else {
//     root.innerHTML = loginHTML;

//     // bắt sự kiện submit
//     const loginForm = document.querySelector(".login");
//     console.log(loginForm);
//     loginForm?.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const emailEl = e.target.querySelector(".email");
//       const passEl = e.target.querySelector(".password");
//       const email = emailEl.value;
//       const password = passEl.value;
//       //   console.log(email, pass);

//       handleLogin({ email, password });
//       emailEl.value = "";
//       passEl.value = "";
//     });
//   }
// };

// render();

const getProfile = async () => {
  const token = localStorage.getItem("access_token");
  const { data } = client.get("/auth/profile", token);
  console.log(data);
};

const handleLogin = async (data) => {
  const { data: tokens } = await client.post("/auth/login", data);
  //   console.log(tokens);
  //   "email": "john@mail.com",
  //   "password": "changeme"
  const { access_token, refresh_token } = tokens;
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);

  render();
};

function escapeOutput(toOutput) {
  return toOutput.replace(/&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
}

function formatDate(date) {
  date = new Date(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

const rootRenderUnauthorizedPage = () => {
  const root = document.querySelector('#root');

  const divLogin = document.createElement('div');
  divLogin.classList.add('login-wrapper');
  divLogin.innerText = 'Login';

  const divBlog = document.createElement('div');
  divBlog.classList.add('blog-wrapper');

  root.append(divLogin);
  root.append(divBlog);
}


const render = () => {
  checkLogin().then((check) => {
    if (check) {
      renderHome();
    } else {
      renderRegisterPage();
      renderLoginPage();
    }
  });
  // console.log(check);

};

const renderBlogsData = async () => {
  const blogsData = await getBlogsData();

  var htmls = blogsData.map((blog) => {
    let date = formatDate(blog.createdAt);
    // console.log(blog);
    return `<section>
        <p>Date: ${date}</p>
        <p>Name: ${blog.userId.name}</p>
        <p>Title: ${blog.title}</p>
        <p>Content: ${blog.content}</p>
  
      </section>`
  })

  const html = htmls.join(' ');
  const container = document.querySelector('.container');
  container.insertAdjacentHTML("beforeend", html);

  // var html = htmls.innerHTML;
  // document.get
}

const renderForm = () => {

  const formElement = document.createElement('form');
  formElement.classList.add('form-post', 'container', 'py-3', 'border-0');

  const divElement = document.createElement('div');
  divElement.className = 'form';

  const labelElement = document.createElement('label');
  labelElement.textContent = 'Enter Your title';

  const inputElement = document.createElement('input');
  inputElement.name = 'title';
  inputElement.type = 'text';
  inputElement.style.display = 'block';
  inputElement.classList.add('form-control', 'mb-3',);


  const titleTextareaElement = document.createElement('p');
  titleTextareaElement.className = 'title-textarea';
  titleTextareaElement.textContent = 'Enter your title';

  const textareaElement = document.createElement('textarea');
  textareaElement.name = 'content'
  textareaElement.className = 'border';
  textareaElement.style.padding = '20px';
  textareaElement.style.display = 'block';

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('btn', 'btn-primary', 'd-block');
  buttonElement.type = 'submit';
  buttonElement.style.display = 'block';
  buttonElement.textContent = 'Write new!';

  const imgElement = document.createElement('img');
  imgElement.src = 'https://i.pinimg.com/originals/47/97/b0/4797b05c719a01b177114e93c177d960.gif';

  divElement.appendChild(labelElement);
  divElement.appendChild(inputElement);
  formElement.appendChild(divElement);
  formElement.appendChild(titleTextareaElement);

  formElement.appendChild(textareaElement);
  formElement.appendChild(buttonElement);
  formElement.appendChild(imgElement);

  const profile = document.querySelector('.profile ');
  // console.log(profile);
  profile.insertAdjacentElement("afterend", formElement);




  formElement.addEventListener('submit', (e) => {
    const input = document.querySelector("input[name=title]");
    const textarea = document.querySelector("textarea[name=content]");

    const title = escapeOutput(input.value);
    const content = escapeOutput(textarea.value);
    e.preventDefault();

    postBlog({ title, content }).then(() => {
      render();
    });
  });

}

function renderHome() {

  renderBlogsData();

  const userInfo = getProfile();


  const welcomeHTML = `<div class="container py-3">
      <ul class = "profile list-unstyled d-flex gap-2">
          <li> <span>Chào bạn:</span> ${userInfo.name} </li>
          <li><a href="#" class="logout">Đăng xuất</a></li>
      </ul>
      </div>`;

  root.innerHTML = welcomeHTML;
  const logout = root.querySelector(".profile .logout");
  // console.log(root);

  logout?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    render();
  })

  if (checkLogin()) {
    renderForm();
  }

  // console.log(checkLogin());


};