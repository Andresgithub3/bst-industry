import { Outlet } from "react-router-dom";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <>
    <TopNav />
      <main>
      {/* This is where the child routes will be rendered */}
        <Outlet />
      </main>

      <BottomNav />
    </>
  );
}

export default App;
