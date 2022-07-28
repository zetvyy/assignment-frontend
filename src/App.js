import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/Home";
import AssignmentOne from "./html-css/AssignmentOne";
import Moviedb from "./js-api/Moviedb";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/html-css" element={<AssignmentOne />} />
        <Route exact path="/js-api" element={<Moviedb />} />
      </Routes>
    </Router>
  );
}

export default App;
