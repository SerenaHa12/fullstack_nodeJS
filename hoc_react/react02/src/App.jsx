import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;

/*
Class:
- render() -> khi bị re-render -> Gọi lại hàm này.
- class React.Component
+ Life Cycle
+ State

- Function -> Không có state, lifecycle -> Hook 

- Hook là 
+ function đặc biệt
+ chỉ được gọi ở cấp đầu tiên trong functional Component
+ function bắt đầu bằng chữ use 

1. useState: state hook 
+ nhận vào inital value 
-> trả về array bao gồm tên của state và 1 hàm để set state đó
*/
