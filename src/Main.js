import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Introduction from "./Introduction";
import Timing from "./Timing";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple Webapp</h1>
          <div className="header">
            <button><NavLink exact to="/">Introduction</NavLink></button>
            <p></p>
            <button><NavLink to="/timing">Timing</NavLink></button>
            <p></p>
            <button><NavLink to="/contact">Contact</NavLink></button>
          </div>
          <div className="content">
            <Route exact path="/" component={Introduction}/>
            <Route path="/timing" component={Timing}/>
            <Route path="/contact" component={Contact}/> 
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;