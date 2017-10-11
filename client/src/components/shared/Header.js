import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/header.css';
class Header extends Component {
  renderContent() {
    return [
      <li key="1">
        <Link to="/pacientes">Pacientes</Link>
      </li>,
      <li key="2">
        <Link to="/logout">
          <div>
            <i className="material-icons">exit_to_app</i>
          </div>
        </Link>
      </li>
    ];
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/">
            <span className="left brand-logo">SKP</span>
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

export default Header;
