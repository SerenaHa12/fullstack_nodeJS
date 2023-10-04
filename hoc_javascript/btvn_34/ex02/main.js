// Async Await
// Async là một function -> Luôn trả về một promise
// Await gọi trong function Async
// Kỹ thuật hàm tự chạy: IIFE
// const getData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Hoàng An"), 1000);
//   });
// };

const getName = async () => {
  //   return "Hoàng An";
  const data = await getData();
  console.log(data);
  return data;
};

getName().then((data) => {
  console.log(data);
});
console.log(getName());
getName();

// Cách 2: DÙng IIFE: Immediately Invoked Function Expression
// hàm chứa các biểu thức ngay lập tức được gọi và thực thi sau khi chúng được định nghĩa
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hoàng An"), 1000);
  });
};

async () => {
  const data = await getData();
  console.log(data);
};

// Bài toán reject
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Hoàng An"), 1000);
  });
};

async () => {
  try {
    const data = await getData();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Hoàn thành");
  }
};

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("get A");
    }, 1000);
  });
};

const getB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("get B");
    }, 2000);
  });
};

const getC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("get C");
    }, 500);
  });
};

(async () => {
  const a = await getA();
  console.log(a);
  const b = await getB();
  console.log(b);
  const c = await getC();
  console.log(c);
})();

const getRequest = () => {
  return new Promise((resolve) => {
    // const response = {};

    // resolve(response);
    setTimeout(() => {
      const response = {
        text: () => {
          return new Promise((resolve, reject) => {
            resolve(JSON.stringify(data));
          });
        },

        json: () => {
          return new Promise((resolve, reject) => {
            resolve(data);
          });
        },
      };
      const data = {
        name: "Ha Chi",
        email: "chi@gmail.com",
      };

      resolve(response);
    }, 1000);
  });
};

getRequest()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

async () => {
  const response = await getRequest();
  const data = await response.json();
  console.log(data);
};

const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 5000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 5000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 5000,
        },
        {
          id: 4,
          name: "User 4",
          salary: 5000,
        },
        {
          id: 5,
          name: "User 5",
          salary: 5000,
        },
      ];
      const user = users.find(({ id: _id }) => _id === id);
      resolve(user);
    }, 1000);
  });
};

users.forEach(async ({ id }) => {
  const data = await getUser(id);
  console.log(data);
});

const lists = [1, 2, 3, 4, 5];
// Yêu cầu: tính tổng thu nhập tất cả các user có trong list

let total = 0;
lists.for((id) => {
  const user = await.getUser(id);
  total += user.salary;
  console.log(total);
});

(async () => {
    const user = await.getUser(total);
})

let total = 0;
const getSalary = async () => {
  for (let id of lists) {
    const user = await getUser(id);
    total += user.salary;
  }
  console.log(total);
};
// dùng vòng lặp của mảng k được
getSalary();

const requests = lists.map(async (id) => await getUser(id));
console.log(requests);
Promise.all(requests).then((users) => {
  const total = users.reduce((prev, current) => prev + current.getSalary(), 0);
  console.log(total);
});
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                {
                    id: 1,
                    name: "User 1",
                    salary: 1000,
                },
                {
                    id: 2,
                    name: "User 2",
                    salary: 2000,

                },
                {
                    id: 3,
                    name: "User 1",
                    salary: 3000,

                },];
            const user = users.find(({ id: _id }) => _id === id);
            resolve(user);
        }, 1000);
    });
};

users.forEach(async ({ id }) => {
    const data = await getUser(id);
    console.log(data);
})

const lists = [1, 2, 3];
// tinh tong thu nhap co tat ca user co trong mang list
let total = 0;
lists.forEach(async (id) => {
    const user = await getUser(id);
    total += user.salary;
});

const getSalary = async () => {
    for (let id of lists) {
        const user = await getUser(id);
        total += user.salary;
    }

    console.log(total);
}

getSalary();

const requests = lists.map(async (id) => await getUser(id));
// console.log(requests);

Promise.all(requests).then((users) => {
  const total = users.reduce((total, user) => total + user.salary, 0);
  console.log(total);
});
