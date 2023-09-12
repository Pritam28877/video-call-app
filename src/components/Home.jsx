import { useState } from "react";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  return (
    <div>
      <label htmlFor="">Enter the Room Code</label>
      <input
        type="text"
        required
        placeholder="Enter Room code"
        value={RoomCode}
      />
    </div>
  );
};

export default Home;
