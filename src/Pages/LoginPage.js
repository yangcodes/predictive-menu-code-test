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
  };

  const Logout = () => {
    console.log("You've logged out");
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
        <LoginForm />
      )}
    </div>
  );
};

export default LoginPage;
