import React, { Component } from 'react';
import './FrontScreen.css';
import frontScreenCut from './frontCut.jpeg';
import frontScreen from './frontScreen.jpeg';
import Sidebar from './Sidebar';

export default class FrontScreen extends Component {
  render() {
    return (
      <div className="screen-body">
        <Sidebar />
        <img src={ frontScreenCut } alt="front" className="cut" />
        <img src={ frontScreen } alt="front" className="nocut" />
        {/* <p>oioi</p> */}
      </div>
    )
  }
}
