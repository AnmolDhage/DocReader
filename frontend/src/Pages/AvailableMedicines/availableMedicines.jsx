import React from 'react'
import "./availableMedicines.css"
import data from '../../DemoData/demoMedData'

const AvailableMedicines = () => {

    let onBuyClick=(name)=>{
        var win = window.open(`https://www.netmeds.com/catalogsearch/result/${name}/all`, '_blank');
        win.focus();
    }

  return (
    <div className='availableMedicines-container'>
        <div className='availableMedicines-container-title'>Available Medicines</div>

        <table className='table'>
            <tr>
                <th className='table-id'>ID</th>
                <th className='table-name'>Name</th>
                <th className='table-desc'>Description</th>
                <th className='table-desc'>Ecommerce</th>
            </tr>
            {
                data?.map(element=>{
                    return (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.desc}</td>
                            <td className='buyMed' onClick={()=>onBuyClick(element.name)}>Buy Now</td>
                        </tr>
                    )
                })
            }
            

        </table>
    </div>
  )
}

export default AvailableMedicines