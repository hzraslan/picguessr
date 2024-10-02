import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileUpload from "./containers/FileUpload";
import LandingPage from "./containers/LandingPage/LandingPage";
import "./App.css";
import TopBar from "./components/reusables/OverlayComponents/TopBar/TopBar";
import LoginPage from "./containers/LoginPage/LoginPage";
import { FirebaseContext } from "./firebase/firebase-init";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const { firebase } = React.useContext(FirebaseContext);

  onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  });

  return (
      <div className="app w-100 h-100">
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
