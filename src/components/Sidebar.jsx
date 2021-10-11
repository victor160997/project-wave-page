import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <input type="checkbox" id="menu" />
        <label for="menu" class="menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav class="nav">
          <ul>
            <li>Página Inicial</li>
            <li>Projetos</li>
            <li>Obras</li>
            <li>Fale Conosco</li>
            <li>Visão</li>
          </ul>
        </nav>
      </div>
    )
  }
}
