import React, { useState } from "react";
import { Alert, Card, Container } from "react-bootstrap";
import Home from "./Home";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
      <Box
        sx={{
          textAlign: "center",
          width: 300,
          height: 300,
          boxShadow: 1,
          marginLeft: 50,
          marginTop: 10,
          paddingTop: 2,
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        {home ? (
          <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <div className="form-group">
              <TextField
                required
                id="outlined-required"
                type="email"
                label="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
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
      </Box>
    </div>
  );
}
