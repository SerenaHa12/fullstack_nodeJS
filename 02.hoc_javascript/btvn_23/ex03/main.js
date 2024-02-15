/*
DOM HTML
Thay đổi thuộc tính

- Thuộc tính có sẵn: Bản thân thẻ HTML có sẵn thuộc tính đó

- Thuộc tính tự tạo: data attributes
*/

var links = document.querySelector(".link");
console.log(links);

// 1. Lấy giá trị thuộc tính
//  Cú pháp: element.tenthuoctinh

console.log(links.href);
console.log(links.title);
console.log(links.target);
console.log(links.rel);
console.log(links.className);
console.log(links.id);
console.log(links.getAttribute("width"));

// 2. Thay đổi giá trị thuộc tính
links.href = "https://www.google.com/";
links.rel = "follow";
links.id = "link-02";
links.setAttribute("href", "https://www.google");

// 3. Xóa thuộc tính
links.removeAttribute("title");

// Data Attribute
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

/*
Cách truy cập vào Data Attribute

Cách 1: DÙng getAttribute
*/

var content = document.querySelector(".content");
console.log(content.getAttribute("data-count"));

// Cách 2: Truy cập thông qua Dataset
console.log(content.dataset);
console.log(content.dataset.count);
console.log(content.dataset.indexNumber);

// Gán giá trị cho data attribute
content.setAttribute("data-count", 10);
