import "./App.css";
import MoneyTransfer from "./components/MoneyTransfer";
import Students from "./components/Students";
function App() {
  return (
    <>
      <h1>Use Callback, UseMemo</h1>
      {/*  <MoneyTransfer /> */}

      <h1>Use Transition</h1>
      <Students />
    </>
  );
}

export default App;

/*
- Memorization: kỹ thuật tối ưu hóa

- UseCallback(callback, deps) --> cache function qua mỗi lần rerender 
*/
