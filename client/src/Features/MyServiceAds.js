
import React, { useState, useEffect } from "react";
import {useGetUserID} from "../CustomHooks/useGetUserID";
import Table from 'react-bootstrap/Table';
import Spinner from "./Spinner";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import TimeAgo from 'react-timeago'

export default function MyServiceAds() {
  const userId = useGetUserID()
  console.log("my service User:", userId)
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
      const response = await axios.get(`/serviceprovider/listserviceadsbyuser?owner=${userId}`, {
        withCredentials: true
      });
      const responseData = response
      setFetchedData(responseData)
      console.log("Service Ads by user:", responseData)
    } catch (error) {
      console.error("Error fetching data:", error.message)
    }
  };

  if (!fetchedData || !fetchedData.data.adverticedServiceByUser) {
    return <Spinner />;
  }

  const services = fetchedData.data.adverticedServiceByUser

  const handleDeleteProperty = async (id) => {
    console.log("id:", id);
    try {
      await axios.delete(`serviceprovider/delete/${id}`, {
        withCredentials: true
      });
    fetchData()
    
    } catch (error) {
      console.error("Error deleting property:", error.message);
    }
  }

  const handleEditProperty = (id) => {
    navigate (`/editservicead/${id}`)
  }

  return (
    <div>
      <div>Service Ads</div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Location</th>
            <th>Telephone</th>
            <th>Rate p/hr</th>
            <th>Created On</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => {
            const { _id, category, location, rate, telephone, createdAt} = item
            const created = new Date (createdAt)
            const year = created.getFullYear()
            const month = created.getMonth() + 1
            const day = created.getDate()
            
            return (
              <tr key={_id}>
                <td>{index + 1}</td>
                <td>{category}</td>
                <td>{location}</td>
                <td>{telephone}</td>
                <td>£ {rate}</td>
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
