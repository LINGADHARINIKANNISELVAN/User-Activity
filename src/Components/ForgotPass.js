import { React, useState } from "react";
import Resetpass from "./Resetpass";

import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function ForgotPass() {
  const [emaillog, setEmaillog] = useState(" ");

  // const [flag, setFlag] = useState(false);
  //const [home, setHome] = useState(true);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    let mail = localStorage.getItem("email").replace(/"/g, "");
    //let name=localStorage.getItem("name").replace(/"/g, "");

    if (!emaillog) {
      setLogin(true);
      console.log("EMPTY");
    } else if (emaillog !== mail) {
      console.log("The email Id is not in the database");
      setLogin(true);
    } else {
      setLogin(!login);
      //   Userfront.init(name);
      //   Userfront.sendResetLink("lingadharini.k@gmail.com");
      console.log(emaillog);
      console.log("Please check ur mail");
    }
  }
  return (
    <>
      {login ? (
        <div>
          <Box
            sx={{
              textAlign: "center",
              width: 250,
              height: 250,
              boxShadow: 1,
              marginLeft: 50,
              marginTop: 10,
              paddingTop: 2,
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <h1>Forgot Password</h1>

            <form onSubmit={handleFormSubmit}>
              <TextField
                required
                id="outlined-required"
                type="email"
                label="Enter Email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Box>
        </div>
      ) : (
        <Resetpass />
      )}
    </>
  );
}

export default ForgotPass;
