import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import profile from "../Assets/profile.png"
import Spinner from "./Spinner"
import axios from 'axios'
import { useEffect, useState, useCallback } from "react"
import EditProfile from "../Components/EditProfile"

export default function MyProfile () {
    const userID = useGetUserID ()
    console.log("profileuser:", userID)
    // const [fetchedData, setFetchedData] = useState(null)
    const {data} = useFetchData(`http://localhost:5000/user/listoneuser/${userID}`)
    console.log("user data profile:", data)
    const [profileUpdate, setProfileUpdate] = useState(false)

    useEffect( () => {
        
    }, [data])

    if (!data) {
        return <Spinner />; 
      }


    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:5000/user/listoneuser/${userID}`, {
    //         withCredentials: true
    //       });
    //       const responseData = response.data;
    //       setFetchedData(responseData);
    //       console.log("Data by user:", responseData);
    //     } catch (error) {
    //       console.error("Error fetching data:", error.message);
    //     }
    //   };
    
//    useEffect ( () => {
//     const fetchData = async () => {
//         try {
//           const response = await axios.get(`http://localhost:5000/user/listoneuser/${userID}`, {
//             withCredentials: true
//           });
//           const responseData = response.data;
//           setFetchedData(responseData);
//           console.log("Data by user:", responseData);
//         } catch (error) {
//           console.error("Error fetching data:", error.message);
//         }
//         fetchData()
//       };
//    })
    


//     if (!fetchedData || fetchedData.selectedUser){
//         return <Spinner />
//     }

    if (!data) {
        return <Spinner />; 
      }


    
    const handleUpdateProfile = () => {
        setProfileUpdate(true)
    }

    const handleSaveProfile =() => {
        setProfileUpdate(false)
        
    }
    const {firstName, 
           lastName, 
           email, 
           username, 
           telephone, 
           address, 
           about, 
           image,
           title} = data.selectedUser
   
    const city = address && address.length > 0 ? address[0].city : ''
    const profileImage = image ? `https://res.cloudinary.com/dgnqjr0we/image/upload/${image}` : profile 
    return (
        <div>


           { !profileUpdate ? (
                        <div>
                        <button onClick={handleUpdateProfile}>Update</button>
                        <div>
                            <img src={profileImage} alt="Profile Image" style={{width:'200px', height:'200px'}}/>
                        </div>
                        
                        <div>Name: {title} {firstName} {lastName}</div>
                        <div>User name: {username} </div>
                        <div>Email: {email} </div>
                        <div>Telephone: {telephone}</div>
                        <div>City: {city}</div>
                        <div>About: {about} </div>
                        </div>
                        
           ):(
            <div>
                <button onClick={handleSaveProfile}>Back</button>
                <EditProfile/>

            </div>
           ) }
        </div>
    )
}