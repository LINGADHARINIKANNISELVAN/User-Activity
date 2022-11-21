import React, { useState } from "react";
import { Alert,Card,Container } from "react-bootstrap";
import Home from "./Home";


export default function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let pass = localStorage.getItem("password").replace(/"/g, "");
    let mail = localStorage.getItem("email").replace(/"/g, "");
    //setHome(false);
    if (!mail || !pass) {
      setFlag(true);
      console.log("EMPTY");
    } else if (pass !== password || mail !== email) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <div>
      <Container><Card style={{marginLeft:300, width:500, height: 500,border: 0}}>
      {home ? (
        <form  onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
            style={{width:400}}
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input style={{width:400}}
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>
          </div>
          <div>
            <a href="./ForgotPass">Forgot Password? Click here. </a>
          </div>
          {flag && (
            <Alert color="primary" variant="warning">
              Please Enter correct data!
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </Card></Container>
    </div>
  );
}
