import React from 'react';
import './Dog.css';

function DogPic(props) {
  return(
    <div>
      <img src={props.dogPic} alt="dogpic"></img>
    </div>
  )
}

export default DogPic;