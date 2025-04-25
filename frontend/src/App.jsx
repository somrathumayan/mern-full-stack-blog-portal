import { Routes, Route } from "react-router-dom";
import "./App.css";

// Sample pages (you can replace them with your real components)
import Home from "./Pages/Home";
import Dashboard from "./Pages/DBHome";
import PostDetails from "./components/PostDetails";
import News from './Pages/News';
import International from './Pages/International';
import Sports from './Pages/Sports';
import Jobs from './Pages/Jobs';
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/post/:id" element={<PostDetails />} />      
      <Route path="/news" element={<News />} />
      <Route path="/international" element={<International />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
}

export default App;
