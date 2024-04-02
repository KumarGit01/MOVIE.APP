import React,{createContext,useEffect,useState} from 'react'

export const movieContext = createContext(null)

const ApiC = (props) => {
    const [data,setData] = useState([])
    console.log(data)
    const image ="https://image.tmdb.org/t/p/w1280"

    const [search,setSearch] = useState("");
    const [value,setvalue] = useState(null);

    const timer = setTimeout(()=>{
      console.log(search)

    },1000)
    
const changeHandle = (e) =>{     
         setSearch(e.target.value)
      }
   

    const submitHandle = () =>{
      if(search){
        setvalue(search)
      }
          }


   useEffect(()=>{
 if(value === null){
    fetch( "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1")
.then(res => res.json())
.then(dat => setData(dat.results) )
   }
 else
 {
  fetch( `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${value}`)
  .then(res => res.json())
  .then(dat => setData(dat.results) )  
}},[value])

const DataSent = {data,image,search,value,changeHandle,submitHandle}
    return (    
    <movieContext.Provider value={DataSent}>
{props.children}
    </movieContext.Provider>
   
  )
}

export default ApiC




