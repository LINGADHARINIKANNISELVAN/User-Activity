import React, { useState } from "react";
import { Form, Alert, Card, Container } from "react-bootstrap";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const Profession = [
  { value: "Front End", label: "Front End" },
  { value: "Java", label: "Java" },
  { value: "Back End", label: "Back End" },
  { value: "Full stack", label: "Full Stack" },
];
function Registration() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [phone, setPhone] = useState([]);
  const [profession, setProfession] = useState([]);

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      localStorage.setItem("phone", JSON.stringify(phone));
      localStorage.setItem("profession", JSON.stringify(profession));
      console.log(name, email, password, phone, profession);
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <>
      <div>
        {" "}
        <Box
          sx={{
            textAlign: "center",
            width: 500,
            height: 500,
            boxShadow: 1,
            marginLeft: 50,
            marginTop: 10,
            paddingTop: 2,
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  name="name"
                  label="Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  type="email"
                  label="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div>
                <TextField
                  required
                  id="outlined-required"
                  name="number"
                  label="Contact Number"
                  type="number"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div >
                <TextField sx={{width: 220}}
                  id="outlined-select-profession"
                  select
                  label="Choose your Profession"
                  value={profession}
                  onChange={(event) => setProfession(event.target.value)}
                  
                >
                  {Profession.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
              <p onClick={handleClick} color="primary">
                Already registered log in?
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  Please fill the empty fields!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </Box>
      </div>
    </>
  );
}

export default Registration;
