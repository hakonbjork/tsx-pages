import React from "react";
import { Link } from "react-router-dom";

const LoginComp: React.FC = (props) => (
  <div>
    <h2>Hello from login page</h2>
    <br />
    <Link to="/home">Navigate to Home Page</Link>
  </div>
);

export default LoginComp;
