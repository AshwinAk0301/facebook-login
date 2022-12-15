import React from "react";
import "./navbar.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    Navigate("/");
    window.location.reload(true)
  }

  function login() {
    var users = JSON.parse(localStorage.getItem("users"));

    var i = 0;
    for (var user of users) {
      if (user.email === email && user.password === password) {
        i++;
      }
    }
    if (i == 1) {
      alert("Login is successful");
      localStorage.setItem("loggedIn", "loggedIn");
      Navigate("/dashboard");
      window.location.reload(true)

    } 
    else 
    {
      alert("Invalid Login");
    }
  }

  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>faceBook</h1>
        </div>

        <div className="col-md-6">
          {
          
          (() => {
            if (localStorage.getItem("loggedIn")) 
            {
              return <button onClick={logout}> Logout </button>
            } 
            else 
            {
              return (
              <div>
                 
                <input
                  className="user"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                 
                <input
                  className="password"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button className="btn btn-primary" onClick={login}>
                  Login
                </button>
                
              </div> 
              )
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
