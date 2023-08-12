import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Wheather
  const [alert, setAlert] = useState(null);

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<TextForm/>
  //   },
  //   {
  //     path:'/about',
  //     element:<About/>
  //   }
  // ])


  const showAlert = (message,type) => {
    setAlert(
      {
        msg:message,
        type:type
      }
      )
      setTimeout(()=>{
        setAlert(null)
      },2000)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021a3d";
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils-DarkMode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils-LightMode"
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <BrowserRouter>
        <Routes>
          <Route index element={<TextForm></TextForm>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
        {/* <TextForm
          heading="Enter The Text to analyse below"
          mode={mode}
          showAlert={showAlert}
        ></TextForm> */}
        {/* <About></About> */}
      
        </BrowserRouter>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
