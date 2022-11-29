import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div>
      {" "}
      <div>
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
          <h2> Contact US</h2>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                required
                id="outlined-required"
                name="email"
                label="Enter Email"
              />
            </div>
            <div>
              <TextField
                sx={{ width: 220 }}
                id="outlined-multiline-static"
                label="Enter your query"
                multiline
                rows={4}
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              {formStatus}
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}
