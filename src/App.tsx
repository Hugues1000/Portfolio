import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
        <Route path="/skills" element={<h1>Skills Page</h1>} />
        <Route path="/diplomas" element={<h1>Diplomas Page</h1>} />
        <Route path="/drawings" element={<h1>Drawings Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;