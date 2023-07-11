import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import Table from 'react-bootstrap/Table'
import Spinner from "./Spinner"
import axios from 'axios'
import { useEffect } from "react"

export default function MyAds () {
    const userId = useGetUserID ()
    console.log("user from my ads:", userId)
    const {data, refetchData} = useFetchData(`http://localhost:5000/housing/listpropertiesbyuser?owner=${userId}`)
    console.log("Ads by user:", data)

    useEffect(() =>{
        if (data && data.adverticedPropertyByUser){
            console.log("New data:", data)
        }
    },[data])

    if (!data || !data.adverticedPropertyByUser) {
        return <Spinner />
      }

    const properties = data.adverticedPropertyByUser
    console.log("properties:", properties)


    

    const handleDeleteProperty= async(id) => {
        console.log("id:", id)
        try {
            await axios.delete(`http://localhost:5000/housing/delete/${id}`)
            refetchData()
          } catch (error) {
            console.error("Error deleting property:", error.message);
          }
       
      }
  
    
    return (
        <div>
        <div>Housing adds</div>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>City</th>
          <th>Beds</th>
          <th>Baths</th>
          <th>Rate</th>
          <th>Deposit</th>
          <th>Property Available On</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {properties.map((item, index) => {
            const { _id, address, availableOn, baths, beds, letType, category, deposit, rate } = item
            const city = address[0].city
            return (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <td>{city}</td>
                <td>{beds}</td>
                <td>{baths}</td>
                <td>{rate}</td>
                <td>{deposit}</td>
                <td>{availableOn}</td>
                <td><button>Edit</button></td>
                <td><button onClick={() => handleDeleteProperty(_id)}>Delete</button></td>
              </tr>
            )
          })}
      </tbody>
    </Table>
    </div>
  

    )
}