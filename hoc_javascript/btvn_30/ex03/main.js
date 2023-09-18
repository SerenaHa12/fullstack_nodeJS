/*
Custom Element
- Kỹ thuật tạo ra 1 thẻ HTML riêng
- Thẻ html này phải có 2 từ trở lên và có gạch ngang
- Kỹ thuật để phân chia các thành phần trong trang web -> Hay còn gọi là component

Sử dụng:
- Custom Elements
- Kế thừa từ HTML Elements
- Web component life cycle: life cycle callback
-> là vòng đời từ lúc một component được tạo ra cho đến lúc xóa nó
*/

// Bước 1: tạo component: 1 hàm hoặc 1 class

// Vòng đời component
var HelloWorld = function () {
  return Reflect.construct(HTMLElement, [], this.constructor);
};

HelloWorld.prototype = Object.create(HTMLElement.prototype);

// 1. constructor
HelloWorld.prototype.constructor = HelloWorld;
console.log(HelloWorld.prototype);

// 2. connected Callback -> Component được hình thành (Chạy sau constructor)
// Chỉ chạy 1 lần
HelloWorld.prototype.connectedCallback = function () {
  // console.log("Connected");
  // this.innerText = "Hello World";
  // this.dataset.index = 1;
  // var name = this.getAttribute("name");
  // console.log(name);
  var h1 = document.createElement("h1");
  h1.innerText = "Count: ";
  var text = document.createTextNode(0);
  h1.append(text);
  this.append(h1);

  var button = document.createElement("button");
  button.innerText = "+";
  button.addEventListener("click", function () {
    text.data++;
  });
  this.append(button);
};
// 3. disconnectedCallback -> Component được loại bỏ
HelloWorld.prototype.disconnectedCallback = function () {
  console.log("Disconnected");
};
// Bước 2: Đăng ký component
customElements.define("HelloWorld", HelloWorld);
// lưu ý: nên nhớ nguyên tắc

// Đọc thêm về reflect
// Đọc thêm về code snippet
// Đọc thêm về shadow DOM
