import React from 'react';
import './Card.css'; // Import CSS file for styling
import Form from '../Home/Form';

const Card = ({ image,title,price }) => {
  return (
    <div className="course-card mx-5">
      <img className="course-image" src={image} alt={title} />
      <div className="course-info">
        <h2 className="course-title">{title}</h2>
        <p className="course-description">{title}</p>
        <p className="course-price">{price}</p>
        <Form/>
      </div>
    </div>
  );
}

export default Card;
