import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../actions/Count";
import * as inputActions from "../actions/Inputs";
const Count = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { inputs: storeInputs } = useSelector((state) => state.inputs);
  useEffect(() => {
    console.log("Component did mount.");
  }, []);

  const handleEmail = (e) => {
    // [e.target.name] = setInputs(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };
    dispatch(inputActions.loginUser(body));
    console.log(body);
    console.log("storeInputs" + storeInputs);
  };

  return (
    <div>
      <div>{`storeInputs : ${storeInputs}`}</div>
      <div>dddddd{props.email}</div>

      <form onSubmit={onSubmit}>
        <input onChange={handleEmail} name="email" value={email} />
        <input onChange={handlePassword} name="password" value={password} />
        <button type="submit">클릭 </button>
      </form>
    </div>
  );
};

export default Count;
