import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./account";
const Attributes = () => {
  const { updateAttributes } = useContext(AccountContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [commune, setCommune] = useState("");
  const [address, setAddress] = useState("");
  const handleform = (e) => {
    e.preventDefault();
    const attrList = [
      createAttr("custom:first_name", name),
      createAttr("custom:last_name", lastName),
      createAttr("phone_number", phone),
      createAttr("custom:region", region),
      createAttr("custom:city", city),
      createAttr("custom:commune", commune),
      createAttr("address", address),
    ];
    updateAttributes(attrList);
  };

  const createAttr = (name, val) => {
    return {
      Name: name,
      Value: val,
    };
  };
  return (
    <form onSubmit={handleform}>
      <div className="form-box">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-box">
        <label htmlFor="last_name">Apellidos</label>{" "}
        <input
          type="text"
          value={lastName}
          name="last_name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="form-box">
        <label htmlFor="phone_number">Telefono</label>{" "}
        <input
          type="text"
          value={phone}
          name="phone_number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="form-box">
        <label htmlFor="region">Region</label>{" "}
        <input
          type="text"
          name="region"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        />
      </div>
      <div className="form-box">
        <label htmlFor="city">City</label>{" "}
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div className="form-box">
        <label htmlFor="commune">Comuna</label>{" "}
        <input
          type="text"
          name="commune"
          value={commune}
          onChange={(e) => {
            setCommune(e.target.value);
          }}
        />
      </div>
      <div className="form-box">
        <label htmlFor="address">Direccion</label>{" "}
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <input type="submit" value="Añadir informacion" />
    </form>
  );
};

export default Attributes;
