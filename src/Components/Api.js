import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import './api.css'
import {ThemeContext} from './ThemeContext'
import { useContext } from 'react';

export default function Api() {

  const {theme} = useContext(ThemeContext)
  console.log(theme)

    const [imgData,setImgData] = useState();
    const [dataArray, setDataArray] = useState([]);

const [page, setPage] = useState(1);

useEffect (() => {
 axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
 .then((response) => 
   {setDataArray(response.data) })
},[page])

const next = () => {
 setPage(page + 1)
}

const prev = () => {
 if(page > 1){
   setPage(page - 1)
 }
}

    useEffect(() => {
      axios.get('https://api.thecatapi.com/v1/images/search').
      then((response) => {
          setImgData(response.data[0].url)
      }).catch((error) => {
        console.error("errore")
      })
  
    },[])
    return (
      <div className="api ">
      
        <div className="mt-5 ">
          <img src={imgData} alt="" className='img_api'/>
        </div>




   
    
<div className='taskApi  border border-2 p-4 '>
   <ul className={theme ? 'text-white' : 'text-muted'} >
 {dataArray.map((el,id)=>( <li>{el.title}</li>)
)}
</ul>

 <button className='btn btn-info text-white m-3' onClick={prev}>Previous</button>
 <button className='btn btn-secondary text-white m-3 px-3' onClick={next}>Next</button>
 </div>
</div>
    );
     
}
