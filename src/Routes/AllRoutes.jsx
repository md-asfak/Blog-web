import React from "react";
import { Route, Routes } from "react-router-dom";
import Business from "../Component/Page/Business";
import Entertaiment from "../Component/Page/Entertaiment";
import General from "../Component/Page/General";
import Sporst from "../Component/Page/Sporst";
import Technology from "../Component/Page/Technology";
import Health from "../Component/Page/Health";
import Science from "../Component/Page/Science";
import Home from "../Component/Page/Home";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertaiment" element={<Entertaiment />} />
        <Route path="/general" element={<General />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/sport" element={<Sporst />} />
        <Route path="/science" element={<Science />} />
      </Routes>
    </div>
  );
}
