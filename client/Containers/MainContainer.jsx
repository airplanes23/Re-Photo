import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Landing from "../Components/Landing";
import PhotoCollection from "../Components/PhotoCollection";
import Inspiration from "../Components/Inspiration";
import Education from "../Components/Education";
import NavBar from "../Components/NavBar";
import AddPhoto from "../Components/AddPhoto";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Let's get creatin'!</h1>
      </div>

      <NavBar />

      <main className="router">
        <Switch>
          <Route exact path="/collection" component={PhotoCollection} />
          <Route exact path="/inspiration" component={Inspiration} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/upload" component={AddPhoto} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
    </div>
  );
};

export default MainContainer;
