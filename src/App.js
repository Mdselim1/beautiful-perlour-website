import React from "react";
import { BrowserRouter , Routes,Route} from "react-router-dom";
import Home from "./Components/Pages/HomePages/Home/Home";
import Login from "./Components/Pages/UserRegister/Login/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
