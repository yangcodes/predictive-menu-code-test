import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  const adminuser = {
    name: "Phai",
    email: "admin@predictive.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Submit = (details) => {
    console.log(details);

    if (
      details.name == adminuser.name &&
      details.email == adminuser.email &&
      details.password == adminuser.password
    ) {
      console.log("yay logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("details no match");
      setError("Sorry, details no match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email !== "" ? (
        <div>
          <h2>
            Welcome, <span>{user.name}</span>
            <button onClick={Logout}>Logout</button>
          </h2>
        </div>
      ) : (
        <LoginForm Submit={Submit} error={error} />
      )}
    </div>
  );
};

export default LoginPage;
