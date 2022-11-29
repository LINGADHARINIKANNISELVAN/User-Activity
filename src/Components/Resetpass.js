import { React, useState } from "react";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Resetpass() {
  const [password, setPassword] = useState([]);
  const [rPassword, setrPassword] = useState([]);

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!password || !rPassword) {
      setFlag(true);
    }
    if (password === rPassword) {
      setFlag(false);

      localStorage.setItem("password", JSON.stringify(password));
      //console.log(password);
      console.log("Password reset successfully");
      setLogin(false);
    } else {
      console.log("Passwords dont match. Please enter correctly");
      setLogin(true);
    }
  }

  return (
    <>
      <div>
        {login ? (
          <>
            <Box
              sx={{
                textAlign: "center",
                width: 500,
                height: 250,
                boxShadow: 1,
                marginLeft: 50,
                marginTop: 10,
                paddingTop: 2,
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <h1>Reset password</h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <TextField
                    id="outlined-password-input"
                    label="Enter new Password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-password-input"
                    label="Retype Password"
                    type="password"
                    onChange={(event) => setrPassword(event.target.value)}
                  />
                </div>
                <div>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
              </form>
            </Box>{" "}
          </>
        ) : (
          <Login />
        )}
      </div>{" "}
    </>
  );
}
