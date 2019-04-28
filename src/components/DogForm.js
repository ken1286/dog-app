import React from 'react';
import './Dog.css';

function DogForm(props) {

  return (
    <div className="dog-form">
      <label className="dog-select">Choose a dog breed:</label>
      <select className="breed-select" onChange={props.changeBreed}>
        {props.breeds.map( breed => {
          let breedCaps = breed.charAt(0).toUpperCase() + breed.slice(1);

          if(breedCaps === 'Germanshepherd'){
            breedCaps = 'German Shepherd';
          }else if(breedCaps === 'Mexicanhairless'){
            breedCaps = 'Mexican Hairless';
          }else if(breedCaps === 'Stbernard'){
            breedCaps = 'St. Bernard';
          }else if(breedCaps === 'African'){
            breedCaps = 'African Wild Dog';
          }else if(breedCaps === 'Bullterrier'){
            breedCaps = 'Bull Terrier';
          }

          return <option value={breed} key={breed}>{breedCaps}</option>
        })}
      </select>
    </div>
  )
}

export default DogForm;