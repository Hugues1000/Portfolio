import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Diplomas from "./pages/Diplomas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/drawings" element={<h1>Drawings Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;