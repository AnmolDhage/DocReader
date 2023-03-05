import React from 'react'
import Card from '../../Components/Card/card'
import { FaClipboardList } from 'react-icons/fa'
import { FcAddDatabase } from 'react-icons/fc'

const Medical = () => {
  return (
    <div className='home-card-body'>
        <Card
        link={"/medical/available-medicines"}
        logo={<FaClipboardList/>}
        title={"Available Medicines"}
        desc={"Get list of Available Medicines in your medical collection"}
        />
    <Card
        link={"/medical/add-medicines"}
        logo={<FcAddDatabase/>}
        title={"Add New Medicines"}
        desc={"Add new medicines in your medical collection"}
        />

    </div>
  )
}

export default Medical