customElements.define(
  "hello-world",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerText = `Hello F8`;
    }
  }
);

// const data = {
//   count: 0,
// };
// Object.keys(data).forEach((key) => {
//   console.log(key);
// });

// component.js

class F8 {
  static component(tagName, options) {
    // check hợp lệ
    if (typeof options !== "object" || !options.data || !options.template) {
      console.error("Invalid options!:", tagName);
      return;
    }

    customElements.define(
      tagName,
      class extends HTMLElement {
        // Bước 1: khởi tạo constructor class f8
        constructor() {
          super();
          this.options = options;
          this.attachShadow({ mode: "open" });
          this.render();
          this.setupBtnEvent();
        }

        // Bước 2: hiển thị giao diện từ template, data trong f8 copmponent
        render() {
          this.data = this.options.data();
          // truy cập shadow dom của custom element
          const shadow = this.shadowRoot;
          // tạo một phần tử <template> -> đặt nội dung của nó bằng template HTML từ options
          const templateEl = document.createElement("template");
          templateEl.innerHTML = this.options.template;
          //   sao lưu nội dung của <template> vào nút
          const templateNode = templateEl.content.cloneNode(true);
          //   add nut vào shadow dom
          shadow.appendChild(templateNode);
          if (this.tagName === "COUNTER-APP") {
            this.updateCount();
          }
        }

        setupBtnEvent() {
          const shadow = this.shadowRoot;
          const buttons = shadow.querySelectorAll("button");
          buttons.forEach((button) => {
            const buttonAttribute = button.getAttribute("v-on:click");
            if (buttonAttribute) {
              // biểu thức chính quy để tách lấy hành động (action)
              const [, action] = /(\w+)/.exec(buttonAttribute);
              //   check hàm
              if (typeof this.options[action] === "function") {
                button.addEventListener("click", () => {
                  this.options[action].call(this);
                  if (action === "changeTitle") {
                    this.updateTitle();
                  }
                });
              }
            }
          });
        }

        updateCount() {
          const shadow = this.shadowRoot;
          const h1 = shadow.querySelector("h1");
          const h2 = shadow.querySelector("h2");
          h1.textContent = this.data.title;
          h2.textContent = `Đã đếm ${this.data.count} lần`;
        }

        updateTitle() {
          const shadow = this.shadowRoot;
          const h1 = shadow.querySelector("h1");
          h1.textContent = this.data.title;
        }
      }
    );
  }
}
