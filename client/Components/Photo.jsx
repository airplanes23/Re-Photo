// display the photo and all the info
// get ID and somehow display that one

import React from 'react';

const Photo = props => {

  const { name, date, genre, aperture, shutterSpeed, iso, lighting, notes } = props;

  <div className='photoBox'>
    <div>{ photo } </div>
    <div>Name: </div>
    <div>Date: </div>
    <div>Genre: </div>
    <div>Aperture: </div>
    <div>Shutter Speed: </div>
    <div>ISO: </div>
    <div>Lighting: </div>
    <div>Notes: </div>
  </div>
}