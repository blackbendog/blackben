// Loader.js

import React from 'react';
import './Loader.css';
import loader from '../assets/loader.png'

const Loader = ({ loading, progress }) => {
  return (
    <div className={`loader-overlay ${loading ? '' : 'hidden'}`}>
        <div className="aligner">
        <img alt="loader" src={loader}/>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
