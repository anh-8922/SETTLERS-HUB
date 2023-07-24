
import '../Style/component.css'
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom'
import useFetchData from '../CustomHooks/useFetchData'
import { useGetUserID } from '../CustomHooks/useGetUserID'
import { useState, useEffect } from 'react'



export default function LoginButtons() {
    const [cookies, setCookies] = useCookies(["access_token"])
    const userID = useGetUserID ()
    const [profileName, setProfileName] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    console.log("userID:", userID)
    const navigate = useNavigate()
    const {data} = useFetchData(`https://settlers-hub-server.vercel.app/user/userlist`)
    console.log("list user:", data)
    const profile = data?.users || []

    useEffect(() => {
      const userData = () => {
        if (profile.length > 0) {
          const userDetails = profile.filter(user => user._id === userID)
          // console.log("User:", userDetails)
      
          if (userDetails.length > 0) {
            const firstName = userDetails[0].firstName;
            setProfileName(firstName)
            setLoggedIn(true)
            // console.log("First Name:", firstName)
          } else {
            console.log("No user found with the given ID")
            setLoggedIn(false)
          }
        }
      };
      userData()
    }, [userID, profile])

    const handelUserRegister = () => {
        navigate('/userregister')
    }

    const handleLogin = () => {
        navigate ('/login')
    }
    const handleLogout = () => {
        setCookies("access_token", "")
        window.localStorage.clear()
        setLoggedIn(false)
        navigate("/");
      };

    const handleprofile = () =>{
        navigate('/profile')
    }
    return(
        <>
            
            {!loggedIn ? (
        <div>
          <button className='log-button' onClick={handelUserRegister}>Sign up</button>
          <button className='log-button' onClick={handleLogin}>Sign In</button>
        </div>
      ) : (
        <div>
        <button className='log-button' onClick={handleLogout}>Logout</button>
        <button className='log-button' onClick={handleprofile}>{profileName}</button>
        </div>
      )}
            {/* <button >notifications</button> */}
            
        </>
    )
}
