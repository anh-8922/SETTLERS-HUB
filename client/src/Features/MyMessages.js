import Table from 'react-bootstrap/Table'
import useFetchData from '../CustomHooks/useFetchData'
import { useGetUserID } from "../CustomHooks/useGetUserID"

export default function MyMessages () {
    const userId =useGetUserID ()
    const {data, refetch} = useFetchData(`/servicerequests/listrequestadsbyuser?owner=${userId}`)
    console.log("data message:", data)

    return (
        <div>
            hi message
            <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Message</th>
            <th>Sender</th>
            <th>Email address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {properties.map((item, index) => {
            const { _id, address, availableOn, baths, beds, category, deposit, rate } = item
            const city = address[0].city
            return (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <td>{city}</td>
                <td>{beds}</td>
                <td>{baths}</td>
                <td>£ {rate}</td>
                <td>£ {deposit}</td>
                <td>{availableOn}</td>
              </tr>
            )
          })} */}
        </tbody>
      </Table>
        </div>
    )
}