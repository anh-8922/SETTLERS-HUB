
import React, { useState, useEffect } from "react";
import {useGetUserID} from "../CustomHooks/useGetUserID";
import Table from 'react-bootstrap/Table';
import Spinner from "./Spinner";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function MyAds() {
  const userId = useGetUserID();
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
      const response = await axios.get(`http://localhost:5000/housing/listpropertiesbyuser?owner=${userId}`, {
        withCredentials: true
      });
      const responseData = response;
      setFetchedData(responseData);
      console.log("Ads by user:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  if (!fetchedData || !fetchedData.data.adverticedPropertyByUser) {
    return <Spinner />;
  }

  const properties = fetchedData.data.adverticedPropertyByUser;

  const handleDeleteProperty = async (id) => {
    console.log("id:", id);
    try {
      await axios.delete(`http://localhost:5000/housing/delete/${id}`, {
        withCredentials: true
      });
    fetchData()
    
    } catch (error) {
      console.error("Error deleting property:", error.message);
    }
  }

  const handleEditProperty = (id) => {
    navigate (`/editpropertyad/${id}`)
  }

  return (
    <div>
      <div>Housing ads</div>
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
