import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

export default function App() {
  return (
    <h1 className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </h1>
  );
}
