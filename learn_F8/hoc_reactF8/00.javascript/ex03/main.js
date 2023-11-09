// import data from "./api.js";
const data = [
  {
    id: 15,
    title: "HTML CSS Pro",
    slug: "htmlcss",
    description:
      "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
    image: "courses/15/62f13d2424a47.png",
    icon: "courses/15/62385d6c63dfa.png",
  },
];
// main.js

// App.js
function App() {
  return <New />;
}

// news  
const New = (props) => {
  return (
    <div className="new-container">
      <h4>{props.title}</h4>
    </div>
  );
};
