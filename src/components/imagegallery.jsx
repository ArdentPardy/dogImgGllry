import React from 'react';
import '../imagegallery.css'; // Correct the path here

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((url, index) => (
        <div key={index} className="image-container">
          <img src={url} alt={`Dog ${index}`} className="dog-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
