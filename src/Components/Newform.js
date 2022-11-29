import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export default function Newform() {
  const [currency, setCurrency] = React.useState("EUR");
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        width: 300,
        height: 300,
        boxShadow: 1,
        marginLeft: 50,
        marginTop: 10,
        paddingTop: 2,
      }}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="UserName"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="John Doe"
        />
        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField id="outlined-number" label="Mobile Number" type="number" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
