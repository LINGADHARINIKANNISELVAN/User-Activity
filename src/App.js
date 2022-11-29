import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPass from "./Components/ForgotPass";
import Login from "./Components/Login";
import Resetpass from "./Components/Resetpass";
import UserList from "./Components/UserList";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ImageSlider from "./Components/ImageSlider";
import Cardview from "./Components/Cardview";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabledata from "./Components/Tabledata";
import ModalCard from "./Components/ModalCard";
import Newcard from "./Components/Newcard";
import Editcard from "./Components/Modal";
import Theme from "./Components/Theme";
import Newform from "./Components/Newform";
import ResponsiveDrawer from "./Components/ResponsiveDrawer";
import Leftbar from "./Components/Leftbar";
import Layout from "./Components/Layout";

export default function App() {
  return (
    <>
      {" "}
      <ThemeProvider Theme={Theme}>
       
        <Leftbar />
        <div style={{ marginTop: 50 }}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" render={() => <Home />} />
                <Route path="/Home" render={() => <Home />} />
                <Route path="/Login" render={() => <Login />} />
                <Route path="/ForgotPass" render={() => <ForgotPass />} />
                <Route path="/Resetpass" render={() => <Resetpass />} />
                <Route path="/UserList" render={() => <UserList />} />
                <Route path="/Contact" render={() => <Contact />} />
                <Route path="/About" render={() => <About />} />
                <Route path="/Registration" render={() => <Registration />} />
                <Route path="/Image" render={() => <ImageSlider />} />
                <Route path="/Cardview" render={() => <Cardview />} />
                <Route path="/Table" render={() => <Tabledata />} />
                <Route path="/ModalCard" render={() => <ModalCard />} />
                <Route path="/Newcard" render={() => <Newcard />} />
                <Route path="/Editcard" render={() => <Editcard />} />
                <Route path="/Newform" render={() => <Newform />} />
              </Routes>
            </Layout>
          </Router>
        </div>

        <div className="app_footer">
          <h6>"Copyrights 1999-2022. All Rights Reserved."</h6>
        </div>
      </ThemeProvider>
    </>
  );
}
