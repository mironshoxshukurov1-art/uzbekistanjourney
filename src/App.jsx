import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Tours from "./components/Tours";
import TourSelect from "./components/TourSelect";
import Options from "./components/Options";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/TourSelect" element={<TourSelect />} />
        <Route path="/Options" element={<Options />} />
      </Routes>

      <Footer />
    </div>
  );
}
