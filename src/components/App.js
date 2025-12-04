import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Navigation.js";
import Welcome from "./Welcome.js";
import Moments from "./Moments.js";
import Ourstory from "./Ourstory.js";
import Registry from "./Registry.js";
import Rsvp from "./Rsvp.js";
import Dialog from "./Dialog.js";
import NotFound from "./NotFound.js";
import '../App.scss'

 
class App extends Component {
  constructor(props) {
    super(props)

     this.state = {
        overlayIsOpen: false
      }
  }

  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => (
          <div className="container">

            <div className="navigation text-center">
              <h1 className="header">Frederick &amp; Grace</h1>
              <Navigation />

              <div className="trigger-wrapper">
                <span onClick={(e) => this.setState({ overlayIsOpen: true })} className="trigger-button">MENU</span>
              </div>
              <Dialog overlayIsOpen={this.state.overlayIsOpen} onClose={(e) => this.setState({ overlayIsOpen: false })} />
            </div>
            
            <div className="content">
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames='fade'
                  exit={false}
                >
                  <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/ourstory" component={Ourstory}/>
                    <Route path="/rsvp" component={Rsvp}/>
                    <Route path="/moments" component={Moments}/>
                    <Route path="/registry" component={Registry}/>
                    <Route component={NotFound}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>

          </div>
        )} />
      </BrowserRouter>
    );
  }
}
 
export default App;