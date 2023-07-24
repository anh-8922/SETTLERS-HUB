import useFetchData from "../CustomHooks/useFetchData"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import profile from "../Assets/profile.png"
import Spinner from "./Spinner"
import { useEffect, useState } from "react"
import EditProfile from "../Components/EditProfile"

export default function MyProfile () {
    const userID = useGetUserID ()
    console.log("profileuser:", userID)
    const {data, refetch} = useFetchData(`https://settlers-hub-server.vercel.app/user/listoneuser/${userID}`)
    console.log("user data profile:", data)
    const [profileUpdate, setProfileUpdate] = useState(false)
    const [saveClick, setSaveClick] = useState(false)



    useEffect( () => {
        if(saveClick) {
            refetch();
            setSaveClick(false)
        }
    }, [saveClick])

    if (!data) {
        return <Spinner />; 
      }
      
    const handleUpdateProfile = () => {
        setProfileUpdate(true)
    }

    const handleSaveProfile =() => {
        setProfileUpdate(false)
        setSaveClick(true)
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