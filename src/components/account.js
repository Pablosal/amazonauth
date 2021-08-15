import React, { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool";
export const AccountContext = createContext();
const Account = (props) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    getSession().then((session) => {
      setLogged(true);
    });
  }, []);
  const getSession = async () => {
    return await new Promise((res, rej) => {
      const user = Pool.getCurrentUser();
      setUser(user);
      console.log(user);
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
  const recoverPassword = (Username) => {
    const cognitouser = new CognitoUser({
      Username,
      Pool,
    });
    cognitouser.forgotPassword({
      onSuccess: function (data) {
        // successfully initiated reset password request
        console.log("CodeDeliveryData from forgotPassword: " + data);
      },
      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
      //Optional automatic callback
      inputVerificationCode: function (data) {
        console.log({ data });
      },
    });
  };
  const resetPassword = (code,password) => {
    const user = Pool.getCurrentUser();
    user.confirmPassword(code, password, {
      onSuccess: function (data) {
        // successfully initiated reset password request
        console.log("well document, password changed");
      },
      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
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
    <AccountContext.Provider
      value={{ authenticate, getSession, logged, user, recoverPassword,resetPassword }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default Account;
