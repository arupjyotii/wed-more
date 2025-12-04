import React, { Component } from "react";
import Count from "./Count";
import RsvpHere from "./RsvpHere";

class Welcome extends Component {

  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-12 col-sm-6 offset-sm-3">
             <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(77_of_83).jpg?alt=media&token=ad0fbea5-aaa8-4dd0-8b20-6d5a2fda1a10" alt="welcome hero" />
          </div>
         
          <div className="intro col-10 offset-1">
            <p>We joyfully invite you to our wedding celebration!</p>
            <p>Dress code is cocktail.</p>
            <p>Please bring your vaccination card or a picture of it.</p>
          </div>

          <div className="vector col-12 text-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/ladybug-vector.png?alt=media&token=7a0ac9f4-a675-4eab-a12e-2bb16e946596" alt="ladybug vector"/>
          </div>

          <div className="details col-10 offset-1">
            <div className="venue">
              Court in the Square
            </div>
            <div className="date">
              401 2nd Ave S, Seattle, WA 98104
            </div>
            <div className="time">
              4:00 PM PST
            </div>
            <Count />
          </div>

          <RsvpHere />
        </div>
      </div>
    );
  }
}
 
export default Welcome;

