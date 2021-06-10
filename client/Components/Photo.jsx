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
      {/* {photo && (
        <figure className="charPhoto">
          <img src={getImgSrc(photo)} />
        </figure>
      )} */}
      <img
        src={photo}
        alt="photo"
      />
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
  );
};

export default Photo;
