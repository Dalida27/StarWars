import React from 'react';
import { Link } from 'react-router-dom';
import './Landingscreen.css';

function Landingscreen() {
  return (
    <div className='landing'>
      <div className='bg-animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
      </div>
      <div className='centered-content'>
        <p className='fest-text'>STAR WARS</p>
        <p className='inspiration-text'>A long ago in a galaxy far, far away...</p>
        <Link to='/home'>
          <button className='get-started mt-3'>Start exploration</button>
        </Link>
      </div>
    </div>
  );
}

export default Landingscreen;
