import ComponentA from "./components/Context/ComponentA";
import ComponentB from "./components/Context/ComponentB";
import React from "react";

// !!!khởi tạo Context
export const AppContext = React.createContext();
console.log(AppContext);

function App() {
  const data = {
    name: "Chi",
    email: "chi@gmail.com",
  };
  return (
    <AppContext.Provider value={data}>
      <ComponentA />
      <ComponentB />
    </AppContext.Provider>
  );
}

export default App;
