
import { useState, useEffect } from "react";
import {useGetUserID} from "../CustomHooks/useGetUserID";
import Table from 'react-bootstrap/Table';
import Spinner from "./Spinner";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function MyRequestsAds() {
  const userId = useGetUserID()
  console.log("my request User:", userId)
  const [cookies, _] = useCookies(["access_token"]);
  const [fetchedData, setFetchedData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (cookies.access_token) {
      fetchData();
    }
  }, [cookies.access_token ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/servicerequests/listrequestadsbyuser?owner=${userId}`, {
        withCredentials: true
      });
      const responseData = response
      setFetchedData(responseData)
      console.log("Ads by user:", responseData)
    } catch (error) {
      console.error("Error fetching data:", error.message)
    }
  };

  if (!fetchedData || !fetchedData.data.adverticedRequestByUser) {
    return <Spinner />;
  }

  const servicesRequests = fetchedData.data.adverticedRequestByUser

  const handleDeleteProperty = async (id) => {
    console.log("id:", id);
    try {
      await axios.delete(`servicerequests/delete/${id}`, {
        withCredentials: true
      });
    fetchData()
    
    } catch (error) {
      console.error("Error deleting property:", error.message);
    }
  }

  const handleEditProperty = (id) => {
    navigate (`/editrequestad/${id}`)
  }

  return (
    <div>
      <div>Request Ads</div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Location</th>
            <th>Subject</th>
            <th>Created On</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {servicesRequests.map((item, index) => {
            const { _id, category, location, subject, createdAt} = item
            const created = new Date (createdAt)
            const year = created.getFullYear()
            const month = created.getMonth() + 1
            const day = created.getDate()
            
            return (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <td>{location}</td>
                <td>{subject}</td>
                <td>{year}-{month}-{day}</td>
                <td><button onClick={() => handleEditProperty(_id)}>Edit</button></td>
                <td><button onClick={() => handleDeleteProperty(_id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      
    </div>
  );
}
