import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext, UserContext } from "../../context/usercontext";
import ButtonGroup from "@mui/material/ButtonGroup";
import DefaultButton from "../Button/Button";
import Tag from "../Tag/Tag";

// const tags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

const EventsCard = ({ event, isDetails }) => {
  const { user, setUser } = useContext(UserContext);
  const { setOpen } = useContext(ModalContext);
  const navigate = useNavigate();
  const time = new Date(event.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const isExist = user.myEvents.some((e) => e.id === event.id);
  const date = new Date(event.time).toLocaleDateString();

  function signUpHandler() {
    setUser((prevUser) => ({
      ...prevUser,
      myEvents: [...prevUser.myEvents, event],
    }));
    setOpen(true);
  }

  return (
    <div className="border border-zinc-300">
      {/* Image */}
      <div className="relative border-2 border-gray-200 rounded-lg shadow-md">

        {/* Sign Up badge, will update this later on so it will render conditionally if user signed up on the event */}
        {isExist && (
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1">
            Signed Up
          </div>
        )}
        <img
          className="max-h-[350px] w-full object-cover"
          src={event.image}
          alt="Event"
        />
      </div>

      {/* Tags */}
      <div className="m-1">
        {event.category.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>

      {/* Event title */}
      <div className="px-2">
        <h2 className="text-xl text-red-600 font-bold mb-2">{event.eventTitle}</h2>
        <p className="text-red-500">{event.location}</p>
        <p className="text-red-500">{`${date} @ ${time}`}</p>
        <p className="text-zinc-500 text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          ducimus maiores, itaque repellendus eum tempore nulla culpa molestias
          saepe odio.
        </p>
      </div>

      <div>
        <ButtonGroup
          sx={{ mt: 2, width: "100%", boxShadow: 0, border: "1px solid gray", borderRadius: 0 }}
          variant="contained"
          aria-label="Basic button group"
        >
          {!isDetails && <DefaultButton onClick={() => navigate(`/event/${event.id}`)} text={"Details"} customStyle={{color: '#000', backgroundColor: '#fff', '&:hover': { color: '#fff', backgroundColor: '#e7000b'}}} />}
          <DefaultButton onClick={signUpHandler} isDisabled={isExist} text={`${isExist ? 'Signed Up' : 'Sign Up'}`} customStyle={{color: '#000', backgroundColor: '#fff', '&:hover': { color: '#fff', backgroundColor: '#e7000b'}}} />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default EventsCard;
