import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import TopBar from "../../components/reusables/OverlayComponents/TopBar/TopBar";
import BottomBar from "../../components/reusables/OverlayComponents/BottomBar";
import Globe from "../../components/reusables/Globe/Globe";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="home d-flex flex-column justify-content-between w-100 h-100">
      <Globe />
      <div className="center-title d-flex flex-column m-auto">
        <img src="assets/images/logo.svg" alt="logo" className="pb-2" />
        <Button bsPrefix="home-button" onClick={() => navigate("/upload")}>EXPLORE</Button>
      </div>
      <BottomBar />
    </div>
  );
};
export default LandingPage;
