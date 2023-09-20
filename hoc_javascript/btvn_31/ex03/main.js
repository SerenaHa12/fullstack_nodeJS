// Kích hoạt Strict mode cho file JavaScript
"use strict";
a = 10;
console.log(a);

var getMessage = function() {
    "use strict";
    a = 10;
    console.log(a);
}

getMessage();

// Hoisting 
"use strict";

/**
 * Hoisting là một cơ chế mặc định của JS
 * Hoisting tự động đẩy phần khai báo  lên trước
 * Hosting không đẩy giá trị vào biến mà chỉ 
 */