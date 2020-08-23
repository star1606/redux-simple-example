import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (dataSumbit) => {
  // const data = axios.post();
  console.log(dataSumbit);
  return {
    type: LOGIN_USER,
    payload: dataSumbit,
  };
};
