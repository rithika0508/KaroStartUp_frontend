import { useState } from "react";
import Register from "./components/Register/Register";
import Level from "./components/LvlSystem/Levels";
import ChatBot from "./components/ChatBot/ChatBot";
import Home from "./components/Home_Page/Home";
import About from "./components/AboutUs/About";
import Reward from "./components/Reward/reward";
import Dates from "./components/dates/app1";
function App() {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="App__main">
      <Home />
      <div className="App__chat">
        <ChatBot />
      </div>
      <div className="App__Dates">
        <Dates />
      </div>
      <div style={{ background: "#fff" }}>
        <About />
      </div>
      <div className="app__rewards">
        <Reward />
      </div>

      <Register visibility={visibility} setVisibility={setVisibility} />
      <Level visibility={visibility} setVisibility={setVisibility} />
    </div>
  );
  // return (
  //   <>
  //     <Reward />
  //     <Home />
  //   </>
  // );
}

export default App;
