// 1. Dữ liệu nguyên thủy

// Number type
var a = 1;
var b = 2;
var c = 1.5;

// String type
var fullName = 'Ha Chi';

// Boolean
var isSuccess = true;

// Undefined
var age;

// null
var isNull = null; //nothing

// symbol
// đặc tính unique
var id = Symbol('id'); // unique
var id2 = Symbol('id2'); // unique

// 2. Dữ liệu phức tạp

// function
var myFunction = function() {
    alert('Hi. Xin chào các bạn');
}

myFunction();

// object
var myObject = {
    name: 'Ha Chi',
    age: '21',
    address: 'Ha Noi',
}

var myArray = [
    'JS',
    'PHP',
    'Ruby',
]
// -> vẫn có key và value, index tự tăng