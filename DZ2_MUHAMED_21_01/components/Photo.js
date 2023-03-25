import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Photo = () => {
  const [photo, setPhoto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((data) => setPhoto(data));
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Photo;
