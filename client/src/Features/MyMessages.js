
import { useState, useEffect } from "react";
import { useGetUserID } from "../CustomHooks/useGetUserID";
import Table from 'react-bootstrap/Table';
import Spinner from "./Spinner";
import axios from 'axios';
import { useCookies } from "react-cookie";

export default function MyMessages() {
  const userId = useGetUserID();
  console.log("my request Userdata message:", userId);
  const [cookies, _] = useCookies(["access_token"]);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedServiceData, setFetchedServiceData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/servicerequests/listrequestadsbyuser?owner=${userId}`, {
        withCredentials: true
      });
      const responseData = response.data;
      setFetchedData(responseData);
      console.log("Ads by user:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const fetchServiceProviderData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/serviceprovider/listserviceadsbyuser?owner=${userId}`, {
        withCredentials: true
      });
      const responseData = response.data;
      setFetchedServiceData(responseData);
      console.log("Ads by user provider:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (cookies.access_token) {
      fetchData();
      fetchServiceProviderData();
    }
  }, [cookies.access_token]);

  if (!fetchedData || !fetchedData.adverticedRequestByUser) {
    return <Spinner />;
  }

  const posts = fetchedData.adverticedRequestByUser;

  const allMessages = [];

  for (const post of posts) {
    const postId = post._id
    console.log("postIdReq:", postId)
    const messages = post.message;
    

    for (const message of messages) {
      // Access the properties of each message
      const { _id: messageId, owner, text } = message;
      const { firstName, lastName, email } = owner;

      // Push the message data to the allMessages array
      allMessages.push({ messageId, postId, firstName, lastName, email, text});
    }
  }

  if (!fetchedServiceData || !fetchedServiceData.adverticedServiceByUser) {
    return <Spinner />;
  }

  const serviceposts = fetchedServiceData.adverticedServiceByUser;

  const allMessagesService = [];

  for (const post of serviceposts) {
    const postId = post._id
    console.log("postId:", postId)
    const messages = post.message;

    for (const message of messages) {
      // Access the properties of each message
      const { _id: messageID, owner, text} = message;
      const { firstName, lastName, email } = owner;

      // Push the message data to the allMessagesService array
      allMessagesService.push({ messageID,postId, firstName, lastName, email, text,});
    }
  }

  const handleDeleteServiceProvidersMessage = async(messageId, postId) => {
    console.log(" request message ID to delete:", messageId)
    console.log(" request post ID to delete:", postId)
    try {
      await axios.delete(`http://localhost:5000/message/deleteservicerequestmessage`, {
        withCredentials: true,
        data: {
          messageId: messageId,
          postId: postId
        }
        
      });
    fetchData()
    
    } catch (error) {
      console.error("Error deleting service request message:", error.message);
    }

  }

  const handleDeleteServiceSeekersMessage = async (messageID, postId) => {
    console.log(" provider message ID to delete:", messageID);
    console.log(" provider post ID to delete:", postId);
    try {
      await axios.delete(`http://localhost:5000/message/deleteservicemessage`, {
        withCredentials: true,
        data: {
          messageId: messageID,
          postId: postId,
        },
      });
      fetchServiceProviderData();
    } catch (error) {
      console.error("Error deleting service provider message:", error.message);
    }
  };
  

  return (
    <div>
      <div>
       <h3> Messages from Service Providers</h3>
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
            {allMessages.map((message) => {
              const { messageId, firstName, lastName, email, text, postId } = message;
              return (
                <tr key={messageId}>
                  <td>{text}</td>
                  <td>{firstName} {lastName}</td>
                  <td>{email}</td>
                  <td><button onClick={() => handleDeleteServiceProvidersMessage(messageId, postId)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <h3>Messages from Service Seekers</h3>
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
  {allMessagesService.map((message) => {
    const { messageID, firstName, lastName, email, text, postId } = message;
    return (
      <tr key={messageID}>
        <td>{text}</td>
        <td>{firstName} {lastName}</td>
        <td>{email}</td>
        <td><button onClick={() => handleDeleteServiceSeekersMessage(messageID, postId)}>Delete</button></td>
      </tr>
    )
  })}
</tbody>
        </Table>
      </div>
    </div>
  );
}

