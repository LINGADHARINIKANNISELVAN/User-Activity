import React from "react";
//import "./Components/sample.css";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPass from "./Components/ForgotPass";
//import Register from "./Components/Register";
import Login from "./Components/Login";
import Resetpass from "./Components/Resetpass";
import UserList from "./Components/UserList";
import Album from "./Components/Album";
import Home from "./Components/Home";
import DrawerComp from "./Components/DrawerComp";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ImageSlider from "./Components/ImageSlider";
import Cardview from "./Components/Cardview";
import "bootstrap/dist/css/bootstrap.min.css";
// Tableview from "./Components/Tableview";
import Tabledata from "./Components/Tabledata";

export default function App() {
  return (
    <>
      <Header />
      <DrawerComp />
       <div style={{marginTop:50}} >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ForgotPass" element={<ForgotPass />} />
                <Route path="/Resetpass" element={<Resetpass />} />
                <Route path="/UserList" element={<UserList />} />
                <Route path="/Album" element={<Album />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Image" element={<ImageSlider />} />
                <Route path="/Cardview" element={<Cardview />} />
                <Route path="/Table" element={<Tabledata />} />
              </Routes>
            </BrowserRouter>
            </div>
         
        <div className="app_footer">
          <h6>"Copyrights 1999-2022. All Rights Reserved."</h6>
        </div>
      
    </>
  );
}
