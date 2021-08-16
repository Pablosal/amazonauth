import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../components/account";
import Attributes from "../components/attributes";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";
const SecretPage = () => {
  const { user, getAttrFromUser, userAttr } = useContext(AccountContext);
  useEffect(() => {
    getAttrFromUser();
  }, [user]);
  useEffect(() => {
    if (userAttr) {
      console.log(userAttr[0].Name);
    }
  }, [userAttr]);
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
