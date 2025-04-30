import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/projects" element={<h1></h1>} />
        <Route path="/skills" element={<h1></h1>} />
        <Route path="/diplomas" element={<h1></h1>} />
        <Route path="/drawings" element={<h1></h1>} />
        <Route path="/contact" element={<h1></h1>} />
      </Routes>
    </Router>
  );
}

export default App;