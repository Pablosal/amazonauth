import React, { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool";
export const AccountContext = createContext();
const Account = (props) => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      setLogged(true);
    });
  }, []);
  const getSession = async () => {
    return await new Promise((res, rej) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) rej();
          res(session);
        });
      } else {
        rej();
      }
    });
  };
  const authenticate = async (Username, Password) => {
    return await new Promise((res, rej) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });
      const authDetauls = new AuthenticationDetails({
        Username,
        Password,
      });
      user.authenticateUser(authDetauls, {
        onSuccess: (data) => {
          console.log("Success", data);
        },
        onFailure: (err) => {
          console.log("Fail", err);
        },
        newPasswordRequired: (data) => {
          console.log("PasswordReq", data);
        },
      });
    });
  };
  return (
    <AccountContext.Provider value={{ authenticate, getSession, logged }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default Account;
