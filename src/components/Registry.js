import React, { Component } from "react";
import RsvpHere from "./RsvpHere";
 
class Registry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      registries: [
        {
          name: "amazon",
          url: "https://www.amazon.com/wedding/share/ChoesenByGrace",
          image: "https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/r-amazon.png?alt=media&token=88f4c0e2-25a3-4413-84b6-6c5a68a6e157",
          alt: "amazon vector"
        },
        {
          name: "cratebarrel",
          url: "https://www.crateandbarrel.com/gift-registry/frederick-choe-and-grace-kim/r6135748",
          image: "https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/r-crate%26barrel.png?alt=media&token=1457a6d6-d561-4ef6-b22f-d484cfb833f3",
          alt: "createbarrel vector"
        }
      ]
    }
  }

  render() {
    const { registries } = this.state
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-12 col-sm-6 offset-sm-3">
             <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/engagement%2FGrace_Fred_Engagement_HiRes_(43_of_83).jpg?alt=media&token=cda8ab70-22e3-41c8-bf69-f35d9aaa56f2" alt="registry hero" />
          </div>
          
          <div className="vector col-12 text-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/ladybug-vector.png?alt=media&token=7a0ac9f4-a675-4eab-a12e-2bb16e946596" alt="ladybug vector"/>
          </div>

          <div className="details col-10 offset-1 col-sm-8 offset-sm-2">
            <div className="copy">
              Your presence, not presents is all that we require as we celebrate our marriage, but if you would like to gift us something to start our married life together, we've set up a registry below:
            </div>
            
            <div className="registry">
              {registries.map((registry) => (
                <div className="icon col-sm-6" key={registry.name}>
                  <a href={registry.url}>
                    <img className={registry.name} src={registry.image} alt={registry.alt} />
                  </a>
                </div>
              ))}
            </div>

          </div>

          <RsvpHere />
        </div>
      </div>
    );
  }
}
 
export default Registry;