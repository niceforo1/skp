import React from 'react';
import styles from './css/breadcrumbs.css';
const Breadcrumb = () => {
  return (
    <div>
      <hr className="breadcrumb-hr" />
      <nav className="breadcrumb-height">
        <div className="nav-wrapper breadcrumb-height">
          <div className="col s12">
            <a href="#!" className="breadcrumb">
              First
            </a>
            <a href="#!" className="breadcrumb">
              Second
            </a>
            <a href="#!" className="breadcrumb">
              Third
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
