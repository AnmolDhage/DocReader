import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import "./scanPrescription.css"
const ScanPrescription = () => {
  return (
    <div>
        <div className='search-container'>
        <div className='search-title'>Scan Prescriptions</div>
        
        <input className='medicine-name-input prescription-input' type="file" id="myFile" name="filename" />
        <button className='getLocation'>Submit</button>
        </div>
    </div>
  )
}

export default ScanPrescription