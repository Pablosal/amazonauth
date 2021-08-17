import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../components/account";
import Attributes from "../components/attributes";

const SecretPage = () => {
  const { user, getAttrFromUser } = useContext(AccountContext);
  useEffect(() => {
    getAttrFromUser();
  }, [user]);

  return (
    <>
      <h1>
        <Link to="/">INICIO</Link>
      </h1>
      <Attributes />
    </>
  );
};

export default SecretPage;
