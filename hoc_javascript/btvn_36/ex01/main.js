import { config } from "./config.js";
import { client } from "./client.js";
// import { PAGE_LIMIT } from "./config.js";

const { PAGE_LIMIT } = config;
const renderPaginate = (totalPage) => {
  const paginateEl = document.querySelector(".paginate");

  paginateEl.innerText = "";
  if (totalPage > 1) {
    const spanPrev = document.createElement("span");

    if (currentPage > 1) {
      const aPrev = document.createElement("a");
      aPrev.href = "#";
      aPrev.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(--currentPage);
      });
      aPrev.innerText = "Prev";
      spanPrev.append(aPrev);
      paginateEl.append(spanPrev);
    }

    for (let page = 1; page <= totalPage; page++) {
      // console.log(currentPage);
      const span = document.createElement("span");
      if (+page === +currentPage) {
        span.classList.add("active");
      }
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = page;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(page);
      });
      span.append(a);
      paginateEl.append(span);
    }

    if (currentPage < totalPage) {
      const spanNext = document.createElement("span");
      const aNext = document.createElement("a");
      aNext.href = "#";
      aNext.addEventListener("click", (e) => {
        e.preventDefault();
        goPage(++currentPage);
      });
      aNext.innerText = "Next";
      spanNext.append(aNext);
      paginateEl.append(spanNext);
    }
  }
};

const goPage = (page) => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  currentPage = page;

  getPosts({
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
    q: keyWord,
  });
};

const render = (posts) => {
  const postsEl = document.querySelector(".posts");
  postsEl.innerText = ``;
  if (posts.length) {
    posts.forEach(({ id, title, excerpt }) => {
      const postsItem = document.createElement("div");
      postsItem.classList.add("post-item");
      const h2 = document.createElement("h2");
      const a = document.createElement("a");
      a.innerText = title;
      a.href = "#";
      h2.append(a);
      postsItem.append(h2);

      const p = document.createElement("p");
      p.innerText = excerpt;
      postsItem.append(p);

      const removeBtn = document.createElement("span");
      removeBtn.classList.add("btn-remove");
      removeBtn.href = "#";
      removeBtn.innerText = "Remove";
      removeBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to remove")) {
          removePost(id);
        }
      });
      postsItem.append(removeBtn);

      postsEl.append(postsItem);
    });
  }
};

const getPosts = async (query = {}) => {
  const queryString = new URLSearchParams(query).toString();
  const { response, data } = await client.get(`/posts?${queryString}`);

  const total = response.headers.get("x-total-count");

  const totalPage = Math.ceil(total / PAGE_LIMIT);
  renderPaginate(totalPage);

  render(data);
};

const addPost = async (data) => {
  const { response } = await client.post("/posts", data);
  if (response.ok) {
    currentPage = 1;
    getPosts({
      _sort: "id",
      _order: "desc",
      _limit: limit,
      _page: currentPage,
    });

    // đóng form
    postForm.innerText = "";

    // reset seclect sort
    sortByEl.value = "latest";
  }
};
let sort = "id";
let order = "desc";
let keyWord = "";
let limit = PAGE_LIMIT;
let currentPage = 1;

getPosts({
  _sort: sort,
  _order: order,
  _limit: limit,
  _page: currentPage,
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  keyWord = e.target.children[0].value;
  getPosts({
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
  });

  e.target.children[0].value = "";
});

const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  order = e.target.value === "latest" ? "desc" : "asc";
  getPosts({
    _sort: sort,
    _order: order,
    _limit: limit,
    _page: currentPage,
    q: keyWord,
  });
});

// Đăng bài
const postNewBtn = document.querySelector(".post-new");
const postForm = document.querySelector(".post-form");
postNewBtn.addEventListener("click", function () {
  postForm.innerText = "";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmitForm);

  const titleEl = document.createElement("input");
  titleEl.placeholder = `Tieu de bai viet`;
  form.append(titleEl);

  const excerptEl = document.createElement("textarea");
  excerptEl.placeholder = "Mo ta";
  form.append(excerptEl);

  const contentEl = document.createElement("textarea");
  contentEl.placeholder = "Nhap noi dung";
  form.append(contentEl);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Save";
  form.appendChild(submitBtn);

  postForm.append(form);
});

const handleSubmitForm = (e) => {
  e.preventDefault();
  const fieldList = e.target.children;
  const [titleEl, excerptEl, contentEl] = Array.from(fieldList);
  const title = titleEl.value;
  const excerpt = excerptEl.value;
  const content = contentEl.value;
  //   console.log(title, excerpt, content);
  addPost({ title, excerpt, content });
};

const removePost = async (id) => {
  const { response } = await client.delete(`/posts/${id}`);
  if (response.ok) {
    currentPage = 1;
    getPosts({
      _sort: "id",
      _order: "desc",
      _limit: limit,
      _page: currentPage,
      q: keyWord,
    });

    sortByEl.value = "latest";
  }
};
