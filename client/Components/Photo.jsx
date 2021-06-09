// display the photo and all the info
// get ID and somehow display that one

import React from 'react';

const Photo = ({ info }) => {

  const { photo, name, date, genre, aperture, shutterSpeed, iso, lighting, notes } = info;

  return(

    <div className='photoBox'>
      <div>{ photo }</div>
      <ul>
        <li>Name: {name}</li>
        <li>Date: {date}</li>
        <li>Genre: {genre}</li>
        <li>Aperture: {aperture}</li>
        <li>Shutter Speed: {shutterSpeed}</li>
        <li>ISO: {iso}</li>
        <li>Lighting: {lighting}</li>
        <li>Notes: {notes}</li>
      </ul>
    </div>
  )
};

export default Photo;

