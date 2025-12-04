import React, { Component } from "react";

class Rsvp extends Component {
  render() {

    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-12 col-sm-6 offset-sm-3">
             <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(61_of_83).jpg?alt=media&token=4c328ea0-035d-4405-8009-31e21d2531b4" alt="ourstory hero" />
          </div>
          <div className="rsvp-here col-12 text-center">
            <p className="intro">If you were not invited with a guest, please do not indicate with a plus one on the RSVP!</p>
            <a href="http://choesenbygrace.rsvpify.com">
              <div className="rsvp-button">
                RSVP ON RSVPify
              </div>
            </a>
            <p className="intro">Please contact Fred or Grace for other questions</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Rsvp;