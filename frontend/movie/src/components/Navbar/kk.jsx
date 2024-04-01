import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Kk = () => {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const data1 = "https://image.tmdb.org/t/p/w1280";

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1");
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const movieById = data.find(movie => movie.id === Number(id));
    if (movieById) {
      setMovie(movieById);
    }
  }, [data, id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='k'>
      <div key={movie.id}>
        <li><img src={data1 + movie.poster_path} alt={movie.original_title} /></li>
      </div>
    </div>
  );
}

export default Kk;
