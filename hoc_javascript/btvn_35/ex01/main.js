const serverApi = ` http://localhost:3001`;

const postUser = async (data) => {
  //Chuyển từ Object => Urlencoded
  const dataUrlEncoded = new URLSearchParams(data).toString();

  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json"
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body: JSON.stringify(data)
    body: dataUrlEncoded,
  });

  console.log(response);
};

// postUser({
//   name: "user7",
//   email: "user7@example.com",
// });

const getUsers = async () => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();
  
  // lấy response header
  console.log(response.headers.get("Content-Type"));
};

getUsers();
