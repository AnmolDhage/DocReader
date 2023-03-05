import React, { useState } from 'react'
import "./searchMedical.css"
import Navbar from '../../Components/Navbar/navbar'

const SearchMedical = () => {
 let [latitude, setLatitude ]=useState(0);
 let [longitude, setLongitude ]=useState(0);
 const getLocation=() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      });
}

  return (
    <div>
        <div className='search-container'>
        <div className='search-title'>Search Medical by Location</div>
        <button className='getLocation' onClick={()=>getLocation()}>Get My Location</button>
        <div className='location'>
        <div>Latitude is :{latitude}</div>
        <div>Longitude is :{longitude}</div>
        </div>
        
        </div>
    </div>
  )
}

export default SearchMedical