import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Api from './api';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [search,setSearch] = useState("");
    const [value,setvalue] = useState(null);

    const changeHandle = (e) =>{
setSearch(e.target.value)
    }

    const submitHandle = () =>{
      setvalue(search)
          }
      
       

  console.log(search)

  return (
    <>   
    <Link to='/'> <div className='navbar'> 
 <div className='Logo'><h1>MOVIESINC<span></span></h1></div>
 <div className='serch'><input type='text' placeholder='Type Here'  onChange={changeHandle}/></div>
 <button onClick={submitHandle}>Search</button>

 </div>

<Api value={value} />
</Link>
    </>

  )
}

export default Navbar
