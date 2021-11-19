import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { Home, About, Contact, Boards, Blogs, Events } from "../pages";

const AppRoutes: React.FC = () => (
  <div>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/board" element={<Boards />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default AppRoutes;
