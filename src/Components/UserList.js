import React from "react";

export default function UserList() {
 
    let name = localStorage.getItem("name").replace(/"/g, "");
    let email = localStorage.getItem("email").replace(/"/g, "");
    let phone = localStorage.getItem("phone").replace(/"/g, "");
    let profession = localStorage.getItem("profession").replace(/"/g, "");

    return (
      <div>
        <div>
          <h1> User Info</h1>
          <table border={4} align="center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Profession</th>
            </tr>

            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{profession}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }

