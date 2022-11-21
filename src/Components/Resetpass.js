import { React, useState } from "react";
import Login from "./Login";

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
            <h1>Reset password</h1>
            <h6>Please enter new password </h6>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Retype Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setrPassword(event.target.value)}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}
