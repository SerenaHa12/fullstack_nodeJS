var Component = {
  // bước 1: tạo hàm
  create: function (name, handle) {
    var componentFunction = function () {
      return Reflect.construct(HTMLElement, [], this.constructor);
    };
    componentFunction.prototype = Object.create(HTMLElement.prototype);

    // Bước 2: Khởi tạo constructor
    componentFunction.prototype.constructor = componentFunction;
    componentFunction.prototype.connectedCallback = handle;
    console.log(componentFunction);

    // Bước 3: Đăng ký component
    customElements.define(name, componentFunction);
  },
};
