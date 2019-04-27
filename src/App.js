import React from 'react';
import DogForm from './components/DogForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      currentBreed: ''
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/list/all');
  }

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        const dogList = data.message;
        this.setState( {
          dogs: Object.keys(dogList), // fetch list of all dog breeds as array
          currentBreed: Object.keys(dogList)[0] // set currentBreed to first breed in dogs
        })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Dogs</h1>
        <DogForm breeds={this.state.dogs} />
        {console.log(this.state.currentBreed)}
        {console.log(this.state.dogs)}
      </div>
    );
  }
}

export default App;
