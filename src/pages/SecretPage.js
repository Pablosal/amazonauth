import React from "react";
import { Link } from "react-router-dom";
const SecretPage = () => {
  return (
    <h1>
      Pagina Secreta Encontrada <Link to="/">Pagina No Secreta</Link>
    </h1>
  );
};

export default SecretPage;
