import React from 'react';
import DogForm from './components/DogForm';
import DogPic from './components/DogPic';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      currentBreed: 'affenpinscher',
      images: [],
      currentImage: ''
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/list/all');
    this.getImages(`https://dog.ceo/api/breed/${this.state.currentBreed}/images`)
  }

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let dm = data.message;
        console.log(Array.from(dm));
        // let dogList = Object.keys(dm).map( key => { return [key, dm[key]]});
        this.setState({
          dogs: Object.keys(dm), // fetch list of all dog breeds as array
          currentBreed: Object.keys(dm)[0],
          ...this.state.images // set currentBreed to first breed in dogs
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getImages = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // let dogList = Object.keys(dm).map( key => { return [key, dm[key]]});
        this.setState({
          ...this.state.dogs, // fetch list of all dog breeds as array
          ...this.state.currentBreed, // set currentBreed to first breed in dogs
          images: data.message,
          currentImage: data.message[Math.floor(Math.random() * data.message.length)]
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  setImage = (event) => {
    console.log(event.target.value);
    this.setState({
      ...this.state.dogs,
      currentBreed: event.target.value,
      images: this.getImages(`https://dog.ceo/api/breed/${event.target.value}/images`),
      ...this.state.currentImage
    })
  }

  // setImage = (event) => {
  //   console.log(event.target.value);
    
  //   this.setState({
  //     ...this.state.dogs,
  //     currentBreed: event.target.value,
  //     ...this.state.images,
  //     currentImage: this.state.images[Math.floor(Math.random() * this.stage.images.length)]
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Dogs</h1>
        <DogForm breeds={this.state.dogs} getArray={this.getImageArray} changeBreed={this.setImage} />
        <DogPic dogPic={this.state.currentImage} />
        {console.log(this.state.currentImage)}
      </div>
    )
  }
}

export default App;