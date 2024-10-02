import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import TopBar from "../../components/reusables/OverlayComponents/TopBar";
import BottomBar from "../../components/reusables/OverlayComponents/BottomBar";
import Globe from "../../components/reusables/Globe/Globe";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="home d-flex flex-column justify-content-between w-100 h-100">
      <TopBar />
      <Globe />
      <div className="center-title d-flex flex-column m-auto">
        <h1>Welcome to the Landing Page</h1>
        <button onClick={() => navigate("/upload")}>Click me</button>
      </div>
      <BottomBar />
    </div>
  );
};
export default LandingPage;
