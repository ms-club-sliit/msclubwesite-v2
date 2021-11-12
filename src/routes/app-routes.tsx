import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Footer } from '../components';

const AppRoutes: React.FC = () => (
  <div>
    <Router>
      <NavBar />
      {/* Route Declaration - Start */}
      
      {/* Route Declaration - End */}
    </Router>
    <Footer />
  </div>
);

export default AppRoutes;