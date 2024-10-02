import React from "react";
import "./styles.scss";
import River from "../../components/reusables/River/River";
import {useAppContext} from "../../App"


const LoginPage = () => {
  const { state, dispatch } = useAppContext();
  const { firebase } = state;

  const login = async () => {
    try {
      const user = await firebase.createUser("samcohen23@gmail.com", "password");
      dispatch({type: 'updateUser', payload: user});
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <div className="login-page d-flex flex-column justify-content-between w-100 h-100">
      <River />
      <div className="center-title d-flex flex-column m-auto">
        <div className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => login()}>Log In</button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
