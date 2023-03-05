import React from 'react'
import "./searchMedicine.css"


const SearchMedicine = () => {
  return (
    <div>
        <div className='search-container'>
        <div className='search-title'>Search Medicine Near you</div>
        <input className='medicine-name-input' type="text" placeholder='Enter Medicine Name' />
        <button className='getLocation'>Search</button>
        </div>
    </div>
  )
}

export default SearchMedicine