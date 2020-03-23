import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './sidebar.css';
import M from "materialize-css";


import 'hover.css';

class NavSide extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });


  }

  render() {
    return (
      <div className="container">
        <div className="row col s6">
        <ul id="slide-out" class="sidenav sidenav-fixed">
        <div className="row hvr-grow-shadow">
          <img alt="logo" className="center logo" src={logo} />
        </div>
        <li>
          <Link className="hvr-icon-wobble-horizontal hvr-grow-shadow">
            <span className="icon">
            <i class="fa fa-home hvr-icon"></i>
            </span>
            Inicio
          </Link>
          <a href="www.google.com" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
            <span className="icon">
            <i class="fa fa-user-graduate hvr-icon"></i>
            </span>
            Cadastrar Alunos
          </a>
          <br></br>
          <a href="www.google.com" className="hvr-icon-pop hvr-grow-shadow">
            <span className="icon">
            <i class="fa fa-times-circle hvr-icon"></i>
            </span>
            Sair
          </a>
        </li>
        
      </ul>
        </div>
      </div>
    );
  }
}
export default NavSide;