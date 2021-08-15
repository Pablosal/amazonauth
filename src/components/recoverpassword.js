import React, { useContext } from "react";
import { useState } from "react";
import {AccountContext} from "./account"
const RecoverPassword = () => {
const {recoverPassword} = useContext(AccountContext)
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [correctCode, setCorrectCode] = useState(false);
  const [code, setCode] = useState(false);
  return (
    <>
    <h1>CODIGO: </h1>
      <button onClick={recoverPassword}>Recuperar Password</button>
      {
          correctCode &&
        <form>
          <h1>Nueva Contraseña</h1>
          <div className="group">
            <label htmlFor="nuevaContraseña">Resetea Nueva Contraseña</label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              name="nuevaContraseña"
              value={newPassword}
              id="nuevaContraseña"
            />
          </div>
          <div className="group">
            <label htmlFor="nuevaContraseña2">Repite Nueva Contraseña</label>
            <input
              onChange={(e) => setNewPassword2(e.target.value)}
              value={newPassword2}
              type="password"
              name="nuevaContraseña2"
              id="nuevaContraseña2"
            />
          </div>
          <input type="submit" />
        </form>
      }
    </>
  );
};

export default RecoverPassword;
