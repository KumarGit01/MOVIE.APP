import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
const Api = (props) => {
    const [data,setData] = useState([])
    console.log(data)
    const data1 ="https://image.tmdb.org/t/p/w1280"



   useEffect(()=>{
   
 if(props.value === null){
    const getreq = async () =>{
        fetch( "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1")
   .then(res => res.json())
   .then(dat => setData(dat.results) )
       }
       getreq();
      
 }else{
    fetch( `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${props.value}`)
    .then(res => res.json())
    .then(dat => setData(dat.results) )  

 }


},[])

    return (
    <div className='apires' >
      
      {data.map((movie,i)=>(
<div className='apifetch' key={i} >
 <Link to= {`/${movie.id}`} ><h2 className='click' >Click</h2></Link>
 <li><img src={data1+movie.poster_path}  className='rotate' /> </li>


<li className='rate'>{movie.vote_average}</li>

<li className='title'> {movie.original_title} </li>

 <li className='date'>Date : {movie.release_date}</li>
<div className='details'> <li >{movie.overview}</li>
</div>
 </div>

))}
    </div>
  )
}

export default Api
