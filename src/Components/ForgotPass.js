import { React, useState } from "react";
import Resetpass from "./Resetpass";
//import Userfront from "@userfront/core";

function ForgotPass() {
  const [emaillog, setEmaillog] = useState(" ");

 // const [flag, setFlag] = useState(false);
 //const [home, setHome] = useState(true);
  const[login,setLogin]=useState(true);

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
  }}
  return (
    <>
      {login ? (
        <div>
          <h1>Forgot Password</h1>
          <div className="form-group">
            <form onSubmit={handleFormSubmit}>
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Resetpass />
      )}
    </>
  );
}

export default ForgotPass;
