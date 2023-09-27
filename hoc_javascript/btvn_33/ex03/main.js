// const html = `<h2>Khóa học fullstack</h2><p>F8</p>`;

const html = (string, personExp, ageExp) => {
  console.log(string);
  console.log(personExp);
  console.log(ageExp);
};

const person = "chi";
const age = 31;
// const str = html`Toi tên là ${person}, tôi ${age} tuổi`;

const output = html`Toi tên là ${person}, tôi ${age} tuổi`;
