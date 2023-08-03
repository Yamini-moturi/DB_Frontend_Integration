import React, { useEffect , useState} from 'react'
import axios from 'axios';

import Table from 'react-bootstrap/Table';

export function PlantList() {
  
  const [PlantList, setPlantList]=useState([]);
  
  const getPlantList= async ()=>{
    const {data} = await axios.get('http://localhost:4000/PlantList');
    console.log(data, 'PlantList');
    setPlantList(data)
  }
  useEffect(()=>{ 
    getPlantList() 
  },[])

  
  //console.log(PlantList,'PlantList test')
  return (
    <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>PLANT NAME</th>
                        <th>COST</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                      PlantList.length>0 && PlantList.map((item) => {
                        return (
                        <tr>
                          <td> {item.PlantName}</td>
                          <td> {item.Cost} </td>
                        </tr>)
                      })
                    }
                  </tbody>
    </Table>
              
  )
}
