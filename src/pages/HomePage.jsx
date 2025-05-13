import HomeInput from "../components/HomeInput/HomeInput";
import ScrollableButton from "../components/ScrollableButton/ScrollableButton";

// const options = ["For You", "Mother's Day", "Women", "Men"];

const HomePage = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2">Hi, Jamie</h1>
        <p className="text-gray-700 mb-8">
          Workout mantra of the day: Don't stop until you're proud.
        </p>
        <HomeInput />
      </div>

      <div className="mt-8">
        <ScrollableButton />
        <img
          src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="running people"
        />
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-extrabold">Never out of breadth.</h1>

        <p className="mt-5 text-md">Saturday morning miles. Wednesday night track workouts. Like run club, our shorts show up ready to move—fast, light, and built for the long haul.</p>
      </div>
    </div>
  );
};

export default HomePage;
