import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Diplomas from "./pages/Diplomas";
import ProjectsExperiences from "./pages/ProjectsExperiences";
import Drawings from "./pages/Drawings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projectsExperiences" element={<ProjectsExperiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/drawings" element={<Drawings />} />
      </Routes>
    </Router>
  );
}

export default App;