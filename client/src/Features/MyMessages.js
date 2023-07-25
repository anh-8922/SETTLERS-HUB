// import { useState, useEffect } from "react";
// import {useGetUserID} from "../CustomHooks/useGetUserID";
// import Table from 'react-bootstrap/Table';
// import Spinner from "./Spinner";
// import axios from 'axios';
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
// import useFetchData from "../CustomHooks/useFetchData";

// export default function MyMessages () {
   
   
//     const userId = useGetUserID()
//     console.log("my request Userdata message:", userId)
//     const [cookies, _] = useCookies(["access_token"]);
//     const [fetchedData, setFetchedData] = useState(null)
//     const [fetchedServiceData, setFetchedServiceData] = useState(null)
//     const navigate = useNavigate()
  

//     useEffect(() => {
//       if (cookies.access_token) {
//         fetchData();
//         fetchServiceProviderData()
//       }
//     }, [cookies.access_token ]);
  
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/servicerequests/listrequestadsbyuser?owner=${userId}`, {
//           withCredentials: true
//         });
//         const responseData = response
//         setFetchedData(responseData)
//         console.log("Ads by user:", responseData)
//       } catch (error) {
//         console.error("Error fetching data:", error.message)
//       }
//     };

//     const fetchServiceProviderData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/serviceprovider/listserviceadsbyuser?owner=${userId}`, {
//           withCredentials: true
//         });
//         const responseData = response
//         setFetchedServiceData(responseData)
//         console.log("Ads by user:", responseData)
//       } catch (error) {
//         console.error("Error fetching data:", error.message)
//       }
//     };

  
//     if (!fetchedData || !fetchedData.data.adverticedRequestByUser) {
//       return <Spinner />;
//     }

//     const posts = fetchedData.data.adverticedRequestByUser
   
//     const allMessages = [];

//     for (const post of posts) {
//       const messages = post.message;
  
//       for (const message of messages) {
//         // Access the properties of each message
//         const { _id: messageId, owner, text } = message;
//         const { firstName, lastName, email } = owner;
        
//         // Push the message data to the allMessages array
//         allMessages.push({ messageId, firstName, lastName, email, text });
//       }


    
//       if (!fetchedServiceData || !fetchedServiceData.data.adverticedServiceByUser) {
//         return <Spinner />;
//       }
  
//       const serviceposts = fetchedData.data.adverticedServiceByUser
     
//       const allMessagesService = [];
  
//       for (const post of posts) {
//         const messages = serviceposts.message;
    
//         for (const message of messages) {
//           // Access the properties of each message
//           const { _id: messageId, owner, text } = message;
//           const { firstName, lastName, email } = owner;
          
//           // Push the message data to the allMessages array
//           allMessagesService.push({ messageId, firstName, lastName, email, text });
//         }
//     }

    


//     return (
//       <div>
//         <div>
//             Messages from Service Providers
//             <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>Message</th>
//             <th>Sender</th>
//             <th>Email address</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//         {allMessages.map((message) => {
//             const { messageId, firstName, lastName, email, text } = message;
//             return (
//               <tr key={messageId}>
//                 <td>{text}</td>
//                 <td>{firstName} {lastName}</td>
//                 <td>{email}</td>
//                 <td><button>Delete</button></td>
               
//               </tr>
//             )
//           })}
//         </tbody>
//       </Table>
//         </div>
//         <div>
//             Messages from Service Seekers
//             <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>Message</th>
//             <th>Sender</th>
//             <th>Email address</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//         {allMessagesService.map((message) => {
//             const { messageId, firstName, lastName, email, text } = message;
//             return (
//               <tr key={messageId}>
//                 <td>{text}</td>
//                 <td>{firstName} {lastName}</td>
//                 <td>{email}</td>
//                 <td><button>Delete</button></td>
               
//               </tr>
//             )
//           })}
//         </tbody>
//       </Table>
//         </div>
//         </div>
//     )
// }

// }



import { useState, useEffect } from "react";
import { useGetUserID } from "../CustomHooks/useGetUserID";
import Table from 'react-bootstrap/Table';
import Spinner from "./Spinner";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useFetchData from "../CustomHooks/useFetchData";

export default function MyMessages() {
  const userId = useGetUserID();
  console.log("my request Userdata message:", userId);
  const [cookies, _] = useCookies(["access_token"]);
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedServiceData, setFetchedServiceData] = useState(null);
  const navigate = useNavigate();

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
      console.log("Ads by user:", responseData);
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
    const messages = post.message;

    for (const message of messages) {
      // Access the properties of each message
      const { _id: messageId, owner, text } = message;
      const { firstName, lastName, email } = owner;

      // Push the message data to the allMessages array
      allMessages.push({ messageId, firstName, lastName, email, text });
    }
  }

  if (!fetchedServiceData || !fetchedServiceData.adverticedServiceByUser) {
    return <Spinner />;
  }

  const serviceposts = fetchedServiceData.adverticedServiceByUser;

  const allMessagesService = [];

  for (const post of serviceposts) {
    const messages = post.message;

    for (const message of messages) {
      // Access the properties of each message
      const { _id: messageId, owner, text } = message;
      const { firstName, lastName, email } = owner;

      // Push the message data to the allMessagesService array
      allMessagesService.push({ messageId, firstName, lastName, email, text });
    }
  }

  return (
    <div>
      <div>
        Messages from Service Providers
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
              const { messageId, firstName, lastName, email, text } = message;
              return (
                <tr key={messageId}>
                  <td>{text}</td>
                  <td>{firstName} {lastName}</td>
                  <td>{email}</td>
                  <td><button>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
      <div>
        Messages from Service Seekers
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
              const { messageId, firstName, lastName, email, text } = message;
              return (
                <tr key={messageId}>
                  <td>{text}</td>
                  <td>{firstName} {lastName}</td>
                  <td>{email}</td>
                  <td><button>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

