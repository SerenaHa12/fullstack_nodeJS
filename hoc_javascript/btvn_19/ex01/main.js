const paragraph = "F8 - Học lập trình cùng F8. Hãy đến F8 để học lập trình F";
const searchTerm = "f";
let count = 0;
let index = -1;

while ((index = paragraph.indexOf(searchTerm, index + 1)) !== -1) {
  count++;
}

console.log(`Số lần xuất hiện của từ '${searchTerm}' là: ${count}`);

// -----------------------------------------------------

var keyword = "hoàng an";
var title = `<p>Từ khóa tìm kiếm: <b>${keyword}</b></p>`;

var content = `Lorem Ipsum is simply hoàng an dummy text of the Hoàng An printing Hoàng an and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());

if (position !== -1) {
  content =
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>` +
    content.slice(position + keyword.length);
  count++;
}

// phần 1: từ đầu tới position
// phần 2: từ position tới hết keyword
// phần 3: sau keyword đến hết
content =
  content.slice(0, position) +
  `<span>${content.slice(position, position + keyword.length)}</span>` +
  content.slice(position + keyword.length);

var result = " ";
while (position !== -1) {
  // lấy đoạn tìm được (hết keyword) và lưu vào biến result
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  //Xóa bỏ nội dung đã được lưu vào biến result
  content = content.slice(position + keyword.length);

  //Thực hiện tìm lại với content mới
  position = content.toLowerCase().indexOf(keyword.toLowerCase());

  //Thêm span vào content mới nếu tìm được
  if (position !== -1) {
    content =
      content.slice(0, position) +
      `<span>${content.slice(position, position + keyword.length)}</span>` +
      content.slice(position + keyword.length);
  }
}

result += content;

console.log(content);
console.log(result);
document.write(title + content);
