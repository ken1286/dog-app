import React from 'react';
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
          dogs: Object.keys(dogList), 
          currentBreed: Object.keys(dogList)[0]
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
        {console.log(this.state.currentBreed)}
        {console.log(this.state.dogs)}
      </div>
    );
  }
}

export default App;
