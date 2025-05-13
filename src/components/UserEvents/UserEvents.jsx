import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/usercontext";
import ButtonGroup from "@mui/material/ButtonGroup";
import DefaultButton from "../Button/Button";

const UserEvents = ({ event }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const time = new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const date = new Date(event.time).toLocaleDateString();

  function removeEvent() {
    setUser((prevUser) => ({
      ...prevUser,
      myEvents: prevUser.myEvents.filter((e) => e.eventTitle !== event.eventTitle),
    }));
  }

  return (
    <div className="flex flex-col text-red-700 border border-zinc-300">
      <img className="max-h-[150px] w-full object-cover" src={event.image} alt="exercising people" />
      <div className="p-1">
        <h1 className="font-bold text-xl">{event.eventTitle}</h1>
        <p className="text-sm">{event.location}</p>
        <p className="text-sm">{`${date} @ ${time}`}</p>
      </div>

      <div className="mt-auto">
        <ButtonGroup sx={{ mt: 2, width: "100%", boxShadow: 0, border: "1px solid black", borderRadius: 0 }} variant="contained" aria-label="Basic button group">
          <DefaultButton onClick={() => navigate(`/event/${event.id}`)} text={"Details"} customStyle={{ backgroundColor: "#fff", color: "#000", '&:hover': { backgroundColor: "#000", color: "#fff" } }} />
          <DefaultButton onClick={removeEvent} text={"Remove"} customStyle={{ backgroundColor: "#fff", color: "#000", '&:hover': { backgroundColor: "#000", color: "#fff" } }} />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default UserEvents;
