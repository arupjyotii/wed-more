import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
 
class NotFound extends Component {
  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-12 col-sm-6 offset-sm-3">
            <h2 className="subheader col-12">404</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(66_of_83).jpg?alt=media&token=9fe30396-acbb-4acb-b79d-42d553d0aa07" alt="registry hero" />
          </div>
          <div className="rsvp-here col-12 text-center">
            <div className="intro col-10 offset-1">
              Whoa, you took a wrong turn somewhere...
            </div>
            <Link className="nav-link" to='/'>
              <div className="rsvp-button">TAKE ME HOME</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
 
export default NotFound;