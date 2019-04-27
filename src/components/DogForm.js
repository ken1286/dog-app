import React from 'react';
import './Dog.css';

function DogForm(props) {
  return (
    <div className="dog-form">
      <label for="dog-select">Choose a dog breed:</label>
      <select className="breed-select">
        {props.breeds.map( breed => {
          return <option value={breed}>{breed}</option>
        })}
      </select>
    </div>
  )
}

export default DogForm;