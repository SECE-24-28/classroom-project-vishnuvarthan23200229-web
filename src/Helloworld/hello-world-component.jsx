import React from "react";
import { HelloWorldStyle } from "./hello-world-style.js";
const HelloWorldComponent = () => {
  return(
    <HelloWorldStyle>
        <div className="com">
        <h1>Welcome to Sri Eshwar</h1>
        <p className="subtitle">Please sign in to your account</p>
        <form action="">
          <input type="text" id="name" placeholder="Enter your name" required />
          <input type="password" id="password" placeholder="Enter your password" required />
          <div style={{display: 'flex', gap: '10px', alignItems: 'center', color: 'black'}}>
            <span>Identity:</span>
            <label><input type="radio" name="Identity" value="Student" /> Student</label>
            <label><input type="radio" name="Identity" value="Teacher" /> Teacher</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="square_rectangle">Move</div>
          <a href="#" className="forgot-password">Forgotten password?</a>
          <div className="divider"></div>
          <a href="#" className="create-account">Create New Account</a>
          <a href="https://sece.ac.in/">click</a>
        </form>
        </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;