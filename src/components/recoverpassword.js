import React, { useContext } from "react";
import { useState } from "react";
import { AccountContext } from "./account";
const RecoverPassword = () => {
  const { recoverPassword, resetPassword } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [correctCode, setCorrectCode] = useState(false);
  const [code, setCode] = useState(false);
  return (
    <>
      <h1>
        CODIGO:
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </h1>
      Ingresa tu Email
      <input
        type="email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => recoverPassword(email)}>Recuperar Password</button>
      {correctCode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            resetPassword(code, password);
          }}
        >
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
      )}
    </>
  );
};

export default RecoverPassword;
