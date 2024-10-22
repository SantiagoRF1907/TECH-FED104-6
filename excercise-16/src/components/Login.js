import React from "react";

function Login(props) {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>

        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default Login;
