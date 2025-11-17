import "./App.css";
import { Routes, Route } from "react-router-dom";
import Init from "./Components/Init";
import Home from "./Components/Home";

function App() {
  return (
    <div className="w-full h-screen flex flex-row bg-zinc-900 text-white">
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
