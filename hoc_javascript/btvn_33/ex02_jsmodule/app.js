import getUser from "./module/home.js";
import { user, course, getCourses } from "./module/home.js";
// Nguyên tắc gộp: default luôn phải viết trước

console.log(getUser());

console.log(user);
console.log(course);
console.log(getCourses());

// Import tất cá 1 file
// import * as home from "./module/home.js";
// const { course, default: getUser, getCourses, user } = home;
