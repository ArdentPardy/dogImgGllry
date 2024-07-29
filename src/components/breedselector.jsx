import React from 'react';

const BreedSelector = ({ breed, numberOfImages, setBreed, setNumberOfImages, fetchImages, breedList }) => {
  // Function to capitalize the first letter of each breed name
  const capitalizeBreedName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages(breed, numberOfImages);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="breed">Select Breed:</label>
        <select id="breed" value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="">--Select a breed--</option>
          {breedList.map((breedName) => (
            <option key={breedName} value={breedName}>
              {capitalizeBreedName(breedName)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="numberOfImages">Number of Images:</label>
        <input
          type="number"
          id="numberOfImages"
          min="1"
          max="100"
          value={numberOfImages}
          onChange={(e) => setNumberOfImages(e.target.value)}
        />
      </div>
      <button type="submit">Fetch Images</button>
    </form>
  );
};

export default BreedSelector;
