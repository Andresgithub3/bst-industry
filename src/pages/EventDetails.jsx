import { useContext } from "react"
import { UserContext } from "../context/usercontext"
import { useNavigate, useParams } from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EventsCard from "../components/EventsCard/EventsCard";
import sampleEvents from "../assets/sampleEvents.json";

const EventDetails = () => {
    const { user } = useContext(UserContext)
    const { id } = useParams();
    const navigate = useNavigate();

    const eventItem = sampleEvents.filter((event) => event.id === id)
    console.log(eventItem)

  return (
    <div className="px-6 py-4">
      <KeyboardBackspaceIcon onClick={() => navigate(-1)} sx={{ fontSize: 40, cursor: "pointer" }} />
      <div className="flex flex-col items-center justify-center gap-2 mt-2">
        <h1 className="text-5xl font-bold text-center">{user.name}</h1>
        <img className="rounded-full h-[150px] w-[150px]" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
          
        <div className="flex items-center justify-center gap-2 font-bold">
          {user.age} | {user.gender} | {user.locationType} | {user ? user.interests?.map((interest, index) => (
            <span key={index}>{interest}{index < user.interests.length - 1 ? ' +' : ''}</span>
          )): null}
        </div>
        <button onClick={() => navigate(-1)} className="!bg-red-700 hover:!bg-red-500 text-white !rounded-none !border-none">See local events</button>
      </div>

      <hr className="my-6" />

      <div>
          <h1 className="text-red-700 font-bold text-xl">Upcoming events near your store</h1>
            <>
              <div className="mt-4">
                {eventItem.map((event, index) => (
                  <EventsCard key={index} event={event} isDetails={true} />
                ))}
              </div>
            </>

      </div>
    </div>
  )
}

export default EventDetails;