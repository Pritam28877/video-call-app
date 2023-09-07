import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Room from "./components/Room";

export default function App() {
  return (
    <h1 className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </h1>
  );
}
