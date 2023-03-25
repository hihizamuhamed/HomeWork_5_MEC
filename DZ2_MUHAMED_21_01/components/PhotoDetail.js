import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const PhotoDetail = () => {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();
  const history = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((data) => setPhoto(data));
  }, [id]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PhotoDetail;
