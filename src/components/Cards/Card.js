import React from 'react';
import "./Card.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
  return (
    <div className="card" >
      {/* <img src={props.image} alt={props.title} /> */}
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <hr></hr>
        <p className="card-text">{props.description}</p>
        {/* <a href={props.link} className="btn btn-primary ">Learn More</a> */}

      </div>
    </div>
  );
}

export default Card;