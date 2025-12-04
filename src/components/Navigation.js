import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
 
class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navigation: [
        {
          cta: 'Our Story',
          url: '/ourstory'
        },
        {
          cta: 'RSVP',
          url: 'rsvp'
        },
        {
          cta: 'Moments',
          url: '/moments'
        },
        {
          cta: 'Registry',
          url: '/registry'
        },
      ]
    }
  }

  render() {
    const { navigation } = this.state
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item" key="Welcome">
              <NavLink className="nav-link" exact={true} to='/'>Welcome</NavLink>
            </li>

          { navigation.map((nav) => (
            <li className="nav-item" key={nav.cta}>
              <NavLink className="nav-link" to={nav.url}>{nav.cta}</NavLink>
            </li>
          ))}
          
        </ul>
      </nav>
    );
  }
}
 
export default Navigation;