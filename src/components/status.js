import React, { useContext, useState, useEffect } from "react";
import { AccountContext } from "./account";
const Status = () => {
  const [status, setStatus] = useState(false);
  const { getSession ,user} = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      setStatus(true);
    });
  }, []);

  return <div>{status ? "You are logged in " + `${user.username}` : "Please log in"}</div>;
};

export default Status;
