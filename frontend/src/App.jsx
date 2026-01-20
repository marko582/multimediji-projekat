import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import Legends from "./pages/Legends";
import Photos from "./pages/Photos";
import FanZone from "./pages/FanZone";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/fanzone" element={<FanZone />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </Router>
  );
}
