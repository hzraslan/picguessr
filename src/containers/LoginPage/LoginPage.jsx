import React from "react";
import "./styles.scss";
import River from "../../components/reusables/River/River";
import { FirebaseContext } from "./../../firebase/firebase-init";

const LoginPage = () => {
  const { firebase } = React.useContext(FirebaseContext);

  const login = async () => {
    try {
      await firebase.createUser("samcohen2@gmail.com", "password");
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
