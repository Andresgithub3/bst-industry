import { Outlet } from "react-router-dom";
import { useState } from "react";
import { UserContext, ModalContext } from "./context/usercontext.js";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";
import TopNav from "./components/TopNav/TopNav";
import SuccessModal from "./components/SuccessModal/SuccessModal.jsx";

function App() {
  const [myEvents, setMyEvents] = useState([]); // this variable is just for testing purposes, so we can see the events in the profile page based on the user's interests
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, myEvents, setMyEvents }}>
      <ModalContext.Provider value={{ open, setOpen }}>
        <div>
          <SuccessModal />
          <TopNav />
          <main className="pb-20">
            {/* This is where the child routes will be rendered */}
            <Outlet />
          </main>
          <BottomNav />
        </div>
      </ModalContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
