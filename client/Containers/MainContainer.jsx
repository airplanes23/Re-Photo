import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Landing from '../Components/Landing';
import PhotoCollection from '../Components/PhotoCollection';
import Inspiration from '../Components/Inspiration';
import Education from '../Components/Education';

const MainContainer = props => {
  const navBar = [];
  return (
    <div className='mainContainerRouter'>
        <h1>im inside main container. main container will houwwwwse routes/paths for: COLLECTION, INSPIRATION, HOME</h1>
        <h2>look to unit 10 app.jsx for switch/routes</h2>
        <h2>collection will be grid of photos</h2>
        <nav>
          <ul className='navList'>
            <li>
              <Link to={'/collection'}>
              <button
                type="button"
                className="btnSecondary"
              >
              Collection
              </button>
              </Link>
            </li>
            <li>
              <Link to={'/inspiration'}>
                <button
                  type="button"
                  className="btnSecondary"
                >
                Inspiration
                </button>
                </Link>
              </li>
            <li>
              <Link to={'/education'}>
                <button
                  type="button"
                  className="btnSecondary"
                >
                Education
                </button>
                </Link>
              </li>
          </ul>
        </nav>

      <main>
        <Switch>
          <Route 
            exact
            path='/'
            component={Landing}
          />
          <Route 
            exact
            path='/collection'
            component={PhotoCollection}
          />
          <Route 
            exact
            path='/inspiration'
            component={Inspiration}
          />
          <Route 
            exact
            path='/education'
            component={Education}
          />
        </Switch>
      </main>
      
    </div>
  )
}

export default MainContainer;