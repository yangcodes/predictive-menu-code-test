import React, { useState } from "react";

function LoginForm() {
  return (
    <form>
      <div className="form-inner">
        <h2>Login Form</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="password" />
        </div>
        <div className="form-button">
          <input type="button" value="Submit" />
          <input type="button" value="Cancel" />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
