import { config } from "./module/config.js";
import { client } from "./module/client.js";

// const { SERVER_API } = config;

const render = (posts) => {
  const postEl = document.querySelector(".posts");

  postEl.innerText = "";
  if (posts.length) {
    posts.forEach(({ id, title, excerpt }) => {
      const postItem = document.createElement("div");
      postItem.classList.add("post-item");

      const h2 = document.createElement("h2");
      const a = document.createElement("a");

      a.innerText = title;
      a.href = "#";
      h2.append(a);
      postItem.append(h2);

      const p = document.createElement("p");
      p.innerText = excerpt;
      postItem.append(p);

      postEl.append(postItem);
    });
  }
};

const getPost = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();

  const { response, data } = await client.get(`/posts?${queryString}`);
  // console.log(data);
  render(data);
};

// khởi tạo các giá trị mặc định
let sort = "id";
let order = "desc";
let keyword = "";

getPost({
  q: keyword,
  _sort: "id",
  _order: order === "latest" ? "desc" : "asc",
});

const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = e.target.children[0].value;
  getPost({
    q: keyword,
    _sort: "id",
    _order: order === "latest" ? "desc" : "asc",
  });
});

// tính năng sort
const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  const order = e.target.value;
  getPost({
    q: keyword,
    _sort: "id",
    _order: order === "latest" ? "desc" : "asc",
  });
});
