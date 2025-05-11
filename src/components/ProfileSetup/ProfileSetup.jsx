import React, { useState } from "react";
import "../../styles/ProfileSetup.css";

const ProfileSetup = () => {
  // State for form fields
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [locationType, setLocationType] = useState("");
  const [interests, setInterests] = useState([]);

  // Handle interest selection/deselection
  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((item) => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  // Check if continue button should be active (all fields filled)
  const isFormValid = age && gender && locationType && interests.length > 0;

  return (
    <div className="profile-setup-container">
      <div className="profile-setup-content">
        <h1 className="profile-title">Tell us about yourself</h1>

        <p className="profile-subtitle">
          We will show you events similar
          <br />
          to your interests
        </p>

        <div className="form-container">
          <div className="form-group">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              id="age"
              className="form-input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender Identity</label>
            <div className="button-group">
              <button
                className={`selection-button ${
                  gender === "Woman" ? "selected" : ""
                }`}
                onClick={() => setGender("Woman")}
              >
                Woman
              </button>
              <button
                className={`selection-button ${
                  gender === "Man" ? "selected" : ""
                }`}
                onClick={() => setGender("Man")}
              >
                Man
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Location type:</label>
            <div className="button-group">
              <button
                className={`selection-button ${
                  locationType === "Indoor" ? "selected" : ""
                }`}
                onClick={() => setLocationType("Indoor")}
              >
                Indoor
              </button>
              <button
                className={`selection-button ${
                  locationType === "Outdoor" ? "selected" : ""
                }`}
                onClick={() => setLocationType("Outdoor")}
              >
                Outdoor
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Interests:</label>
            <div className="interests-container">
              <div className="interests-row">
                <button
                  className={`selection-button ${
                    interests.includes("Yoga") ? "selected" : ""
                  }`}
                  onClick={() => toggleInterest("Yoga")}
                >
                  Yoga
                </button>
                <button
                  className={`selection-button ${
                    interests.includes("HIIT") ? "selected" : ""
                  }`}
                  onClick={() => toggleInterest("HIIT")}
                >
                  HIIT
                </button>
                <button
                  className={`selection-button ${
                    interests.includes("Cardio") ? "selected" : ""
                  }`}
                  onClick={() => toggleInterest("Cardio")}
                >
                  Cardio
                </button>
              </div>
              <div className="interests-row">
                <button
                  className={`selection-button ${
                    interests.includes("Strength") ? "selected" : ""
                  }`}
                  onClick={() => toggleInterest("Strength")}
                >
                  Strength
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`continue-button ${isFormValid ? "active" : "inactive"}`}
          disabled={!isFormValid}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
