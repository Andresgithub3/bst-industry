import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/usercontext";
import { useNavigate } from "react-router-dom";
import "../../styles/ProfileSetup.css";

const ProfileSetup = () => {
  const name = "Jamie Wabaam";
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [locationType, setLocationType] = useState("");
  const [interests, setInterests] = useState([]);
  const { user, setUser, myEvents } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle form input changes
  function onChangeHandler(e) {
    const { name, value } = e.target;
    if (name === "age") setAge(value);
  }

  // Toggle interest selection
  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests((prev) => prev.filter((item) => item !== interest));
    } else {
      setInterests((prev) => [...prev, interest]);
    }
  };

  // Update formData when individual fields change
  useEffect(() => {
    setUser({
      name,
      age,
      gender,
      locationType,
      interests,
      myEvents,
    });
  }, [name, age, gender, locationType, interests]);

  function onSubmit() {
    console.log("Form submitted with data:", user);
    navigate("/profile/user");
  }

  const isFormValid = age && gender && locationType && interests.length > 0;

  return (
    <div className="profile-setup-container max-h-fit">
      <div className="profile-setup-content">
        <h1 className="profile-title">Tell us about yourself</h1>
        <p className="profile-subtitle">
          We will show you events similar
          <br />
          to your interests
        </p>

        <div className="form-container">
          <div className="form-group">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="text"
              id="age"
              className="form-input"
              value={age}
              onChange={onChangeHandler}
              inputMode="numeric"
              pattern="[0-9]*"
              name="age"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gender Identity</label>
            <div className="button-group">
              <button
                className={`selection-button ${gender === "Woman" ? "selected" : ""}`}
                onClick={() => setGender("Woman")}
              >
                Woman
              </button>
              <button
                className={`selection-button ${gender === "Man" ? "selected" : ""}`}
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
                className={`selection-button ${locationType === "Indoor" ? "selected" : ""}`}
                onClick={() => setLocationType("Indoor")}
              >
                Indoor
              </button>
              <button
                className={`selection-button ${locationType === "Outdoor" ? "selected" : ""}`}
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
                {["Yoga", "HIIT", "Cardio", "Strength"].map((interest) => (
                  <button
                    key={interest}
                    className={`selection-button ${interests.includes(interest) ? "selected" : ""}`}
                    onClick={() => toggleInterest(interest)}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          className={`continue-button ${isFormValid ? "active" : "inactive"}`}
          disabled={!isFormValid}
          onClick={onSubmit}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
