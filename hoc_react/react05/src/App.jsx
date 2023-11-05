import { Provider } from "./core/Provider";
import { useContext } from "react";
import Counter from "./components/Counter";
import Chat from "./components/Chat";
function App() {
  console.log(<Chat />);
  return (
    <>
      <h1>Message</h1>
      <Chat />
    </>
  );
}

export default App;
