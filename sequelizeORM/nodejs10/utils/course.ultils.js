module.exports = {
  isCourse: (user, courseId) => {
    // user: object
    // courseId: Khóa học cần kiểm tra
    const result = user.courses.find((item) => ++item.id === +courseId);
    return result ? true : false;
  },
};
