import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

class Dialog extends Component {
    render() {
    	const mobileNavigation = [
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

        const dialog = (
            <div className="navbar-overlay" id="overlay-styles">
                <button id="overlay-close-button" onClick={this.props.onClose}>x</button>
				
                <h1 className="header">Frederick &amp; Grace</h1>

				<ul className="navbar-nav">
		            <li className="nav-item" key="Welcome">
		              <NavLink className="nav-link" exact={true} to='/' onClick={this.props.onClose}>Welcome</NavLink>
		            </li>

		          { mobileNavigation.map((nav) => (
		            <li className="nav-item" key={nav.cta}>
		              <NavLink className="nav-link" to={nav.url} onClick={this.props.onClose}>{nav.cta}</NavLink>
		            </li>
		          ))}
		          
		        </ul>
            </div>
        );

        return (
            <React.Fragment>
                {this.props.overlayIsOpen
	              ? dialog
	              : null
	            }
            </React.Fragment>
        );
    }
}

export default Dialog;
