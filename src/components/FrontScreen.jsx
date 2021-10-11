import React, { Component } from 'react';
import './FrontScreen.css';
/* import frontScreenCut from './frontCut.jpeg';
import frontScreen from './frontScreen.jpeg'; */
import logo from '../images/LogoHeader.png';
import Sidebar from './Sidebar';

export default class FrontScreen extends Component {
  render() {
    return (
      <div className="screen-body">
        <Sidebar />
       {/*  <img src={ frontScreenCut } alt="front" className="cut" />
        <img src={ frontScreen } alt="front" className="nocut" /> */}
        {/* <p>oioi</p> */}
        <div className="config-img">
          <img src={ logo } alt="front" className="logo" />
        </div>
      </div>
    )
  }
}
