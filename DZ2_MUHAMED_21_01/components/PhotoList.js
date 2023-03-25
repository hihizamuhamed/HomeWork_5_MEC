
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
