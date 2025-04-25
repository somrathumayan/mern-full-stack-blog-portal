import { Routes, Route } from "react-router-dom";
import "./App.css";

// Sample pages (you can replace them with your real components)
import Home from "./Pages/Home";
import Dashboard from "./Pages/DBHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
