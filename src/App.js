import "./App.css";
import Alert from "./components/Alert.js";
// import About from './components/About.js';
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const onMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Enabled Light Mode", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type,
      },
      setTimeout(() => {
        setAlert(null);
      }, 1000)
    );
  };
  return (
    <>
      <Navbar title="TextUtils" about="About us" mode={mode} togle={onMode} />
      <Alert alert={alert} show={showalert} />
      <Textform mode={mode} function={showalert} />
      {/* <About /> */}
    </>
  );
}

export default App;