import { useState, useEffect } from "react";
import {useGetUserID} from "../CustomHooks/useGetUserID";
import Table from 'react-bootstrap/Table';
import Spinner from "./Spinner";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useFetchData from "../CustomHooks/useFetchData";

export default function MyMessages () {
   
   
    const userId = useGetUserID()
    console.log("my request Userdata message:", userId)
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

    const messages = fetchedData.data.adverticedRequestByUser
    console.log("messages:", messages)
    return (
        <div>
            hi message
            <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Message</th>
            <th>Sender</th>
            <th>Email address</th>
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