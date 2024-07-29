import React, { useState, useEffect } from 'react';
import BreedSelector from './components/breedselector';
import ImageGallery from './components/imagegallery';
import './app.css';

const App = () => {
  const [breed, setBreed] = useState('');
  const [numberOfImages, setNumberOfImages] = useState(1);
  const [images, setImages] = useState([]);
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message);
        setBreedList(breedList);
      });
  }, []);

  const fetchImages = (selectedBreed, count) => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${count}`)
      .then(response => response.json())
      .then(data => {
        setImages(data.message);
      });
  };

  return (
    <div className="App">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
        breed={breed}
        numberOfImages={numberOfImages}
        setBreed={setBreed}
        setNumberOfImages={setNumberOfImages}
        fetchImages={fetchImages}
        breedList={breedList}
      />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
