// Bai 1: Lấy kết quả giao giữa 2 mảng
// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// function newArr(arr1, arr2) {
//   return arr1.filter(prev => arr2.includes(prev));
// }

// var result = newArr(arrA, arrB);
// console.log(result);

//________________________________________________________________________________

// Bai 2: Làm phẳng array sau (Chuyển về mảng 1 chiều)
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// function newArr(arr) {
//   return arr.reduce((prev, current) => {
//     return prev.concat(Array.isArray(current) ? newArr(current) : current);
//   }, []);
// }

// var flatArr = newArr(arr);
// console.log(flatArr);

//________________________________________________________________________________

// Bai 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu
// var arr = [["a", 1, true], ["b", 2, false]];
// var result = [[], [], []];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     var value = arr[i][j];
//     var type = typeof value;

//     // Tách các phần tử
//     if (type === "string") {
//       result[0].push(value);
//     } else if (type === "number") {
//       result[1].push(value);
//     } else if (type === "boolean") {
//       result[2].push(value);
//     }
//   }
// }

// console.log(result);

//________________________________________________________________________________

// Bai 4: Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện
var data = [
  {
    imageSrc: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    title: "Tiêu đề 1",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quod cum velit, dicta autem veniam quasi aspernatur tempore dolore.",
  },
  {
    imageSrc: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    title: "Tiêu đề 2",
    lorem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quod cum velit, dicta autem veniam quasi aspernatur tempore dolore.",
  },
  {
    imageSrc: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    title: "Tiêu đề 3",
    lorem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quod cum velit, dicta autem veniam quasi aspernatur tempore dolore.",
  },
  {
    imageSrc: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    title: "Tiêu đề 4",
    lorem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime quod cum velit, dicta autem veniam quasi aspernatur tempore dolore.",
  },
];

var dataContainer = document.getElementById("dataContainer");

for (var i = 0; i < data.length; i++) {
  var dataItem = data[i];

  var dataElement = document.createElement("div");
  dataElement.className = "dataItem";
  dataElement.innerHTML = `
    <div class = "dataImg">
      <img src="${dataItem.imageSrc}" alt="Ảnh">
    </div>
    <div class = "dataContent">
      <h2>${dataItem.title}</h2>
      <p>${dataItem.lorem}</p>
    </div>
  `;

  dataContainer.appendChild(dataElement);
}
