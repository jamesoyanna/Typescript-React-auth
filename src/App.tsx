import React, {useState, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link to={"/"} className='navbar-brand'>
          TypesScript App
        </Link>
        <div className="navbar-nav mr-auto">
          <li className='nav-item'>
            <Link to={"/home"} className='nav-link'>
              Home
            </Link>
          </li>
          {/* Show moderator Here */}
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/user' element={<BoardUser />} />
          <Route path='/mod' element={<BoardModerator/>} />
          <Route path='/admin' element={<BoardAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
