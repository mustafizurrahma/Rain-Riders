import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import RideDetails from './components/details/RideDetails';
import Registetion from './components/registetion/Registetion';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className='website-main-wrap'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <nav className='main-nav'>
            <Navbar />
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/registetion">
              <Registetion />
            </Route>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <RideDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/:name">
              <RideDetails />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

        </Router>

      </UserContext.Provider>

    </div>
  );
};

export default App;