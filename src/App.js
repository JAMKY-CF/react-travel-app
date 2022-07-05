
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import React from 'react';
//import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div id='main'>
          <Routes>
              <Route
                exact path="/about"
                element={<About />}
              >
              </Route>

              <Route 
                exact path="/users"
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
      <Footer />
    </>
  );
}

export default App;
