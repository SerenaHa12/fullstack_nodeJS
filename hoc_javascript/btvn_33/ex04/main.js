// Xử lý bất đồng bộ
const step1 = () => {
  console.log("step 1");
};

const step2 = () => {
  setTimeout(() => {
    console.log("step 2");
  }, 1000);
};

const step3 = () => {
  console.log("step 3");
};

step1();
step2();
step3();

/*
Có 3 cách sử lý bất đồng bộ
C1: Callback
C2: Sử dụng object của ES6 Promise
C3: SỬ dụng object của ES7 Async Await Function
*/

const getUsers = (callback) => {
  setTimeout(() => {
    console.log(`Danh sách user`);
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};

const showMessage = () => {
  console.log(`Lay dữ liệu thành công`);
};

getUsers(showMessage);

// Promise
/*
2 trạng thái:
- pending
- fulfilled: -> khi dữ liêu trả về tành công
- reject: 
*/
const getUsersPromise = () => {
  const promise = new Promise((resolve, reject) => {});
  setTimeout(() => {
    const data = [
      {
        name: "Chi",
        email: "chi@gmail.com",
      },
    ];
    console.log("ok");
    resolve(data);
  }, 1000);
};

const showMessagePromise = () => {
  console.log("lấy dữu liệu thành công");
};

getUsersPromise()
  .then((users) => {
    console.log(users);
    showMessage();
  })

  .catch((error) => {
    console.log(error);
  });

//   Promise Change
const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getA");
    }, 1000);
  });
};
const getB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getB");
    }, 2000);
  });
};
const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getC");
    }, 1500);
  });
};

// getA().then((data) => {
//   console.log(data);
//   getB().then((data) => {
//     console.log(data);
//     getC().then((data) => {
//       console.log(data);
//     });
//   });
// });
// -> không nên viết thế này, nên chuyển về dạng chuỗi
// cho dù có catch hay k thì finally vẫn chạy

getA()
  .then((data) => {
    {
      console.log(data);
      return getB();
    }
  })
  .then((data) => {
    {
      console.log(data);
      return getC();
    }
  })
  .then((data) => {
    {
      console.log(data);
    }
  });
