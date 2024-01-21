module.exports = {
  isCourse: (user, courseId) => {
    // user: instace
    // courseId: khóa học cần kiểm tra
    const result = user.courses.find((item) => +item.id === +courseId);
    return result ? true : false;
  },
};
