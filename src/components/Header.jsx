import React, { Component } from 'react'
import logo2 from '../images/LogoH2.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="body-header-hp">
          <div className="images-header">
            <img src={ logo2 } alt="logo wave" />
            <div className="title-name-header">
              <h2>WAVE</h2>
              <h5>ENGENHARIA</h5>
            </div>
          </div>
          <nav className="nav-header">
            <p>Página Inicial</p>
            <p>Projetos</p>
            <p>Obras</p>
            <p>Fale Conosco</p>
            <p>Visão</p>
          </nav>
        </div>
      </div>
    )
  }
}
