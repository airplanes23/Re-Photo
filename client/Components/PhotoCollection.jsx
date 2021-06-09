import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Photo from './Photo'; 


class PhotoCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fetchedPhotos: false,
      photos: [],
    };
  }

  componentDidMount() {
    console.log(`empty arr? ${this.state.photos}`);
    fetch('/photos/')    // check backend for correct router for requests to '/photos'
      .then(res => {
        console.log(res)  // returning response object
        return res.json();
      })
      .then((data) => {
        console.log(data) // returning undefined
        // if (!Array.isArray(photos)) photos = [];
        return this.setState({
          photos: data,
          fetchedPhotos: true
        });
      })
      .catch(err => console.log('PhotoCollection.componentDidMount: get photos: ERROR: ', err));
  }

  // componentDidMount() {
  //   fetch('/photos', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //   })
  //     .then(res => {
  //       console.log(res)
  //       return res.json();
  //     })
  //     .then(jsonRes => {
  //       console.log(jsonRes)
  //       return this.setState({
  //         photos: jsonRes,
  //       });
  //     });
  // }


  render() {
    // if (!this.state.fetchedPhotos) return (
    //   <div>
    //     <h1>Loading data, please wait...</h1>
    //   </div>
    // );

    const { photos } = this.state;
    // console.log('inside render' + photos) // returning undefined
    // if (!photos) return null;

    // if (!photos.length) return (
    //   <div>Sorry, no photos found</div>
    // );

    const photosArray = photos.map((pic, i) => {
      return (
        <Photo
          key={i}
          info={pic}  // pic should have one photo, and all the info. pass the entire pic object as a prop
        />
      );
    });
    // console.log(photosArray)
    return (
      <section className="collection-main">

        <header className="pageHeader">
          <h2>Collection</h2>
          <Link to={'/upload'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Upload a creation
            </button>
          </Link>
        </header>

        <div className="charContainer">
          {photosArray}
          {/* <img src="/client/images/blood-moon.jpg" />
          <img src='https://www.w3schools.com/images/w3lynx_200.png' /> */}
        </div>

      </section>
    );
  }
};

export default PhotoCollection;