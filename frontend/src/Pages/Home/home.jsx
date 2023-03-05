import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Card from '../../Components/Card/card'
import "./home.css"
import { FcPlus } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { TbDeviceLaptop } from "react-icons/tb";
import { FcDocument } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { AuthContext } from '../../Context/authContext';


const Home = () => {
  return (
    <div>
    
    <div className='home-card-body'>  
   
    {<Card
    logo={<FcPlus/>}
      link={"/search-medical"}
      title={"Search Nearby Medicals"}
      desc={"This feature will provide all the nearby medicals"}
    />}
    {<Card
      logo={<FcSearch/>}
      link={"/search-medicine"}
      title={"Search Medicine"}
      desc={"This feature will provide all the medcines"}
    />}
    {<Card
      logo={<TbDeviceLaptop/>}
      link={"/search-medicine-online"}
      title={"Buy Medicines online"}
      desc={"This feature will provide all the online links to buy"}
    />}
    {<Card
     logo={<FcDocument/>}
      link={"/scan-prescription"}
      title={"Scan Prescriptions"}
      desc={"This feature will provide scan prescriptions"}
    />}
    {<Card
      logo={<GiMedicines/>}
      link={"/search-medicine-use"}
      title={"Medicine Use"}
      desc={"This feature will provide use of the medicine"}
    />}

</div>
    </div>

  )
}

export default Home