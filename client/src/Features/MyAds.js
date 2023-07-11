import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import Table from 'react-bootstrap/Table'
import Spinner from "./Spinner"

export default function MyAds () {
    const userId = useGetUserID ()
    console.log("user from my ads:", userId)
    const {data} = useFetchData(`http://localhost:5000/housing/listpropertiesbyuser?owner=${userId}`)
    console.log("Ads by user:", data)


    if (!data || !data.adverticedPropertyByUser) {
        return <Spinner />
      }

    const properties = data.adverticedPropertyByUser
    console.log("properties:", properties)
  
    
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
                <td><button>Delete</button></td>
              </tr>
            )
          })}
      </tbody>
    </Table>
    </div>
  

    )
}