import React, { useContext } from 'react'
import { movieContext } from './apiContext'
import { Link } from 'react-router-dom'

const Api = () => {

    const {data,image,search,value,changeHandle,submitHandle} = useContext(movieContext)


  return (
    
         <>
 <div className='serch'><input type='text' placeholder='Type Here' onChange={changeHandle} /></div>
 <button className="button-64" role="button" onClick={submitHandle}><span class="text">Search</span></button>

    <div className='apires' >
      
      {data.map((movie,i)=>(
<div className='apifetch' key={i} >
   <li><img src={image+movie.poster_path} className='rotate' /> </li>
<li className='rate'>{movie.vote_average}</li>

<li className='title'> {movie.original_title} </li>

 <li className='date'>Date : {movie.release_date}</li>
<div className='details'>

 <Link to= {`/${movie.id}`} >
  <button className="button-89 po" role="button" >Click</button>
</Link>
   </div>
 </div>

))}
    </div>
    </>

  )
}

export default Api
