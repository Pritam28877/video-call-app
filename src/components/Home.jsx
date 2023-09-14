import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const SubmitCode = (e) => {
    e.preventDefault();
    console.log(RoomCode);
    navigate(`/room/${RoomCode}`);
  };
  return (
    <div>
      <form
        onSubmit={SubmitCode}
        className="flex flex-col items-center justify-center h-screen "
      >
        <label htmlFor="">Enter the Room Code</label>

        <input
          type="text"
          required
          placeholder="Enter Room code"
          value={RoomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
};

export default Home;
