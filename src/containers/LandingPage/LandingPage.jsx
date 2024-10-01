import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to the Landing Page</h1>
      <button onClick={() => navigate("/upload")}>Click me</button>
    </div>
  );
};
export default LandingPage;
