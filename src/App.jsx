import { Outlet } from "react-router-dom";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  return (
    <>
    <div>Lululemon</div>
      <main>
      {/* This is where the child routes will be rendered */}
        <Outlet />
      </main>

      <BottomNav />
    </>
  );
}

export default App;
