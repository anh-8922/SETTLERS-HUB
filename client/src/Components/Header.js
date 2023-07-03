
import logo1 from '../Assets/logo1.png'
import '../Style/component.css'
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom'
import useFetchData from '../CustomHooks/useFetchData'
import { useGetUserID } from '../CustomHooks/useGetUserID'
import { useState, useEffect } from 'react'



export default function Header() {
    const [cookies, setCookies] = useCookies(["access_token"])
    const userID = useGetUserID ()
    const [profileName, setProfileName] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    console.log("userID:", userID)
    const navigate = useNavigate()
    const {data} = useFetchData(`http://localhost:5000/user/userlist`)
    console.log("list user:", data)
    const profile = data?.users || []

    useEffect(() => {
      const userData = () => {
        if (profile.length > 0) {
          const userDetails = profile.filter(user => user._id === userID)
          console.log("User:", userDetails)
      
          if (userDetails.length > 0) {
            const firstName = userDetails[0].firstName;
            setProfileName(firstName)
            setLoggedIn(true)
            console.log("First Name:", firstName)
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
        <div className='header' style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        }}>
            <div className='logo'>
                <img src={logo1} alt="logo" style={{width: "20rem"}}/>
            </div>
            {!loggedIn ? (
        <div>
          <button onClick={handelUserRegister}>Sign up</button>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      ) : (
        <div>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleprofile}>{profileName}</button>
        </div>
      )}
            {/* <button >notifications</button> */}
            
        </div>
    )
}

