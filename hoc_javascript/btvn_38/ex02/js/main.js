// BOM BROWSER OBJECT MODEL

/*
Tìm hiểu về BOM Window

*/

const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

let website;
btn.addEventListener("click", () => {
  //   window.open(
  //     "https://www.youtube.com/results?search_query=storage+javascript",
  //     "width=100px, height=200px, top=100px"
  //   );
  website = window.open(
    "https://www.microsoft.com/en-us/edge/update/118?form=MT00JG&channel=stable&version=118.0.2088.46"
  );
  console.log(website);
});

close.addEventListener("click", () => {
  website.close();
});

console.log(window.location);

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

btn.addEventListener("click", () => {
  window.history.pushState();
});

btn.addEventListener("click", () => {
  window.history.pushState();
});

/**
 * inactive
 * backend sử dụng csdl
 * phân tích database: một bản lưu log, một bản lưu thông tin user
*/
