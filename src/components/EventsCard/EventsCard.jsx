import ButtonGroup from "@mui/material/ButtonGroup";
import DefaultButton from "../Button/Button";
import Tag from "../Tag/Tag";

const tags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

const EventsCard = () => {
  return (
    <div className="border border-zinc-300">
      {/* Image */}
      <div className="border-2 border-gray-200 rounded-lg shadow-md">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event"
        />
      </div>

      {/* Tags */}
      <div className="m-1">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>

      {/* Event title */}
      <div className="px-2">
        <h2 className="text-xl text-red-600 font-bold mb-2">Event Title</h2>
        <p className="text-red-500">location</p>
        <p className="text-red-500">time</p>
        <p className="text-zinc-500 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          ducimus maiores, itaque repellendus eum tempore nulla culpa molestias
          saepe odio.
        </p>
      </div>

      <div>
        <ButtonGroup
          sx={{ mt: 2, width: "100%", boxShadow: 0 }}
          variant="contained"
          aria-label="Basic button group"
        >
          <DefaultButton text={"Details"} />
          <DefaultButton text={"Sign Up"} />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default EventsCard;
