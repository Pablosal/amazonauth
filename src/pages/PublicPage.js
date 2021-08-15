import React from "react";
import SignUp from "../components/signup";
import Login from "../components/login";
import Status from "../components/status";
import { Link } from "react-router-dom";
const PublicPage = () => {
  return (
    <header className="App-header">
      <Link to="/secreto">Pagina Secreta</Link>
      <Link to="/recoverpassword">Forgot Password?</Link>
      <Status></Status>
      <SignUp />
      <Login></Login>
    </header>
  );
};

export default PublicPage;
