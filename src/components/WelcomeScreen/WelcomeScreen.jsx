import React from "react";
import "../../styles/WelcomeScreen.css";
import BottomNav from "../BottomNav/BottomNav";
import DefaultButton from "../Button/Button";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="content-container">
        <div className="background-image">
          <h1 className="welcome-title">
            Welcome to your
            <br />
            local lululemon<span className="registered-mark">®</span>
            <br />
            community
          </h1>
          <p className="welcome-subtitle">
            Connect with fellow health and fitness
            <br />
            fans near your closest lululemon store.
          </p>
          <button className="profile-button" onClick={() => navigate('/profile')}>Set up profile</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
