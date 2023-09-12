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
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <button type="submit">Enter Room</button>
    </div>
  );
};

export default Home;
