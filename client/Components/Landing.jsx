import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
      {/* <h2>possible slideshow here?</h2> */}
      <img src="https://live.staticflickr.com/65535/51238263823_ffb0a65910_z.jpg" className="scale-in-hor-center" alt="photo" />
    </div>
  )
};

export default Landing;