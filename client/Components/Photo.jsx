// display the photo and all the info
// get ID and somehow display that one

import React from 'react';

const Photo = props => {

  const { name, date, genre, aperture, shutterSpeed, iso, lighting, notes } = props;

  <div className='photoBox'>
    <div>{ photo } </div>
    <div>Name: {name}</div>
    <div>Date: {date}</div>
    <div>Genre: {genre}</div>
    <div>Aperture: {aperture}</div>
    <div>Shutter Speed: {shutterSpeed}</div>
    <div>ISO: {iso}</div>
    <div>Lighting: {lighting}</div>
    <div>Notes: {notes}</div>
  </div>
};

export default Photo;

