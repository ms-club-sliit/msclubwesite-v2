import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import {Home,Event, About, Contact,Boards} from '../pages';

const AppRoutes: React.FC = () => (
  <div>
    <Router>
      <NavBar />
      {/* Route Declaration - Start */}
      <Boards/>
        {/* <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/events" component={Event} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/board" component={Boards} exact />
        <Route path="/contact" component={Contact} exact /> */}
      {/* Route Declaration - End */}
    </Router>
    <Footer />
  </div>
);

export default AppRoutes;