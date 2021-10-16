import React, { useState } from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const adminUser = {
    name: "Phai",
    email: "admin@predictive.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Submit = (details) => {
    console.log(details);
    if (
      details.name == adminUser.name &&
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("yay logged in");
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("details no match");
      setError("Sorry, details not match");
    }
  };

  const Logout = () => {
    console.log("You've logged out");
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
