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
  const [open, setOpen] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="App__main">
      <div style={{ filter: open ? "blur(10px)" : "" }}>
        <Home
          open={open}
          setOpen={setOpen}
          onCloseModal={onCloseModal}
          setVisibility={setVisibility}
        />
      </div>
      <div className="App__chat">
        <ChatBot />
      </div>
      <div className="App__Dates" id="dates">
        <Dates />
      </div>
      <div style={{ background: "#fff" }} id="about">
        <About />
      </div>
      <div className="app__rewards" id="rewards">
        <Reward />
      </div>
      <div id="register">
        <Register visibility={visibility} setVisibility={setVisibility} />
        <Level visibility={visibility} setVisibility={setVisibility} />
      </div>
    </div>
  );
}

export default App;
