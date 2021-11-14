import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import { Home } from '../pages';

const AppRoutes: React.FC = () => (
  <div>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer />
    </Router>
  </div>
);

export default AppRoutes;