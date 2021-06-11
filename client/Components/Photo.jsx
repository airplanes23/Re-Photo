// display the photo and all the info
// get ID and somehow display that one

import React from "react";

// const getImgSrc = (src) => require(`../assets/${src}`);

const Photo = ({ info }) => {
  const {
    photo,
    name,
    date,
    genre,
    aperture,
    shutterSpeed,
    iso,
    lighting,
    notes,
  } = info;

  // const source = `../../server/data/images/${photo}`;
  // console.log(photo);

  return (
    <div className="photo-box">
      {/* <div>{ photo }</div>
      {/* <img src={getImgSrc(photo)} /> */}
      {/* <img src={getImgSrc(photo)} /> */}

      <img
        className='image'
        src={photo}
        alt="photo"
      />
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Genre:</strong> {genre}</li>
        <li><strong>Aperture:</strong> {aperture}</li>
        <li><strong>Shutter Speed:</strong> {shutterSpeed}</li>
        <li><strong>ISO:</strong> {iso}</li>
        <li><strong>Lighting:</strong> {lighting}</li>
        <li><strong>Notes:</strong> {notes}</li>
      </ul>
    </div>
  );
};

export default Photo;
