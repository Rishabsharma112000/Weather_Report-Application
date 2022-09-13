
import React, { useEffect, useState }  from "react";
import './Css/temp.css'
export const TempApp =()=>{

const [city,setCity]  = useState(null);
const [search,setSearch] = useState("");

useEffect(()=>{

    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=ad40b3d76be851f2198d8be16355e61c`
      const promise = await fetch(url); 
   
      const response = await promise.json();
    console.log("responser",response);
    setCity(response.main);
    }
    fetchApi();
},[search])

    return (<>
   <div className="box">
      <div className="inputData">
        h1
        <input type="search" className="inputField" value={search} onChange={(event)=>{
setSearch(event.target.value)
        }} />
      </div>

      {!city ? (
        <p className="errorMsg">Data Not Found</p>
      ) : 
      (<div className="info">
      <h2 className='location'>
      <i className="fas fa-street-view"></i>{search}
      </h2>
      <h1 className='temp'>
         {city.temp}°C
      </h1>
      <h3 className='tempmin_max'> Max : {city.temp_min}°C| Max : {city.temp_max}°C</h3>
  </div>)
      }
      
   

   <div className="wave -one"></div>
   <div className="wave -two"></div>
   <div className="wave -three"></div>
   </div>
    </>)
}