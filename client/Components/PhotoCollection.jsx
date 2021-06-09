import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Photo from './Photo';

// get list of all the photos and arrange in grid
// look back at market list in marketscontainer
// make it a grid of buttons?
// read from json file
// push into an array
// render the array

const PhotoCollection = (props) => {
  const allPhotos = [];
  allPhotos.push(<Photo />);

  return (
    <div>
      all photos will go here
      {allPhotos}
      {/* <Link to={'/'}>
        <button
          type="button"
          className="btnSecondary"
        >
          BACK
        </button>
      </Link> */}
    </div>
  )
};

export default PhotoCollection;