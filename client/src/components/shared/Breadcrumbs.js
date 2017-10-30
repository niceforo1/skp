import _ from 'lodash';
import React, { Component } from 'react';
// eslint-disable-next-line
import styles from './css/breadcrumbs.css';

class Breadcrumb extends Component {
  renderItems() {
    return _.map(this.props.items, item => {
      return (
        <a href="#!" className="breadcrumb" key={item}>
          {item}
        </a>
      );
    });
  }
  render() {
    return (
      <div>
        <hr className="breadcrumb-hr" />
        <nav className="breadcrumb-height">
          <div className="nav-wrapper breadcrumb-height">
            <div className="col s12">{this.renderItems()}</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Breadcrumb;
