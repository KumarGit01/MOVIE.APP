import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Navbar.css'
import Navbar from './Navbar';
import { movieContext } from './apiContext';

const Kk = () => {
  const {data,image,search,value,changeHandle,submitHandle} = useContext(movieContext)

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(()=>{
    const clicked  = data.find((movie)=> movie.id === Number(id))
setMovie(clicked)
  },[id])

  if (!movie) {
    return <div>Loading...</div>;
  }

  const submitHandle1 = ()=>{
    window.location.replace('/')
  }
  return (
  <>
    <Navbar />
  
<button className="button-89" role="button" onClick={submitHandle1}>Home</button>
  
    <div className='k'>

      <div >
        <li><img src={image + movie.poster_path} alt={movie.original_title} /></li>

      </div>

      <div className='dd' >
<li className='title2'> {movie.original_title} </li>
<li className='rate2'>{Math.floor(movie.vote_average)}</li>
 
 <li className='date2'>Date : {movie.release_date}</li>
<div className='details2'> <li >{movie.overview}</li>
      </div>
      <button >Addd To Watchlist</button>
    </div>
    </div>
    </>
  );
}

export default Kk;
