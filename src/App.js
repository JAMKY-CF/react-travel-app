import './css/reset.css';
import { withAuth0 } from '@auth0/auth0-react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';

function App() {
  return (
    <div id='app-app'>
      < div id='app-header' >
        <Header />
      </div >
      <Router>
        <div id='app-main'>
          <Routes>
            <Route
              exact path="/about"
              element={<About />}
            >
            </Route>

            <Route
              exact path="/user"
              element={<User />}
            >
            </Route>

            <Route
              path="/"
              element={<Home />}
            >
            </Route>
          </Routes>
        </div>
      </Router>
      <div id='app-footer'>
        <Footer />
      </div>
    </div >
  );
}

export default withAuth0(App);
