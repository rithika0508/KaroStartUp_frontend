import { useState } from "react";
import Register from "./components/Register/Register";
import Level from "./components/LvlSystem/Levels";
import ChatBot from "./components/ChatBot/ChatBot";
import Home from "./components/Home_Page/Home";
import About from "./components/AboutUs/About";
function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <Register visibility={visibility} setVisibility={setVisibility} />
      <Level visibility={visibility} setVisibility={setVisibility} />
      <About/>
    </>
  );
}

export default App;
