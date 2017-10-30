import React from 'react';
// eslint-disable-next-line
import styles from './css/loading.css';
const Loading = () => {
  return (
    <div className="preloader-wrapper big active loader">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
