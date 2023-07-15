import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import profile from "../Assets/profile.png"
import Spinner from "./Spinner"
import { useState } from "react"
import EditProfile from "../Components/EditProfile"

export default function MyProfile () {
    const userID = useGetUserID ()
    console.log("profileuser:", userID)
    const {data} = useFetchData(`http://localhost:5000/user/listoneuser/${userID}`)
    console.log("user data profile:", data)
    const [profileUpdate, setProfileUpdate] = useState(false)

    if (!data) {
        return <Spinner />; 
      }
    
    const handleUpdateProfile = () => {
        setProfileUpdate(true)
    }

    const handleSaveProfile =() => {
        setProfileUpdate(false)
    }
    const {firstName, lastName, email, username, telephone, address,} = data.selectedUser
   
    // const city = address[0].city
    return (
        <div>


           { !profileUpdate ? (
                        <div>
                        <button onClick={handleUpdateProfile}>Update</button>
                        <div>
                            <img src={profile} alt="profile-image" style={{width:'200px', height:'200px'}}/>
                        </div>
                        
                        <div>{firstName} {lastName}</div>
                        <div>{username} </div>
                        <div>{email} </div>
                        <div>{telephone}</div>
                        {/* <div>{city}</div> */}
                        </div>
                        
           ):(
            <div>
                <button onClick={handleSaveProfile}>Save</button>
                <EditProfile/>

            </div>
           ) }
        </div>
    )
}