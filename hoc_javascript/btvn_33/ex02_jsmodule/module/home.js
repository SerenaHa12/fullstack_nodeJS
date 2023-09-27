/*
NGUYÊN TẮC TRUNG:
- Muốn import được từ file khác vào -> File được import phải được export.
- Có 2 loại import và export
    + default
    + named

- Với function và class ta có thể sử dụng export trực tiếp trước từ khóa function, class
*/
const user = {
  name: "Chi",
  email: "chi@gmail.com",
};

const course = {
  name: "Fullstack",
  price: "50000",
};

const getCourses = () => {
  return ["A", "B", "C"];
};

function getUser() {
  return user;
}
// Export Default -> trong 1 file chỉ được export default 1 lần
export default getUser;

// Export Name:
export { user, course, getCourses };
