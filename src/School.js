import React from 'react';
import school from './images/school.jpg';
import './css/photo.css';
export default class School extends React.Component {
  render() {
    return (
      <div className="photo-container">
        <img className="photo-center" src={school} alt="school" />
      </div>
    );
  }
}
