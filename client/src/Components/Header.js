import Logo from './Logo'
import '../Style/component.css'
import LoginButtons from '../Features/LoginButtons'



export default function Header() {
    // const [cookies, setCookies, removeCookie] = useCookies(["access_token"])
    // const userID = useGetUserID ()
    // const [profileName, setProfileName] = useState('')
    // const [loggedIn, setLoggedIn] = useState(false)
    // console.log("userID:", userID)
    // const navigate = useNavigate()
    // const {data} = useFetchData(`http://localhost:5000/user/userlist`)
    // console.log("list user:", data)
    // const profile = data?.users || []

    // useEffect(() => {
    //   const userData = () => {
    //     if (profile.length > 0) {
    //       const userDetails = profile.filter(user => user._id === userID)
    //       // console.log("User:", userDetails)
      
    //       if (userDetails.length > 0) {
    //         const firstName = userDetails[0].firstName;
    //         setProfileName(firstName)
    //         setLoggedIn(true)
    //         // console.log("First Name:", firstName)
    //       } else {
    //         console.log("No user found with the given ID")
    //         setLoggedIn(false)
    //       }
    //     }
    //   };
    //   userData()
    // }, [userID, profile])

    // const handelUserRegister = () => {
    //     navigate('/userregister')
    // }

    // const handleLogin = () => {
    //     navigate ('/login')
    // }
    // const handleLogout = () => {
    //     removeCookie(["access_token"], "")
    //     window.localStorage.clear()
    //     setLoggedIn(false)
    //     navigate("/");
    //   };

    // const handleprofile = () =>{
    //     navigate('/profile')
    // }
    
    return(
        <div className='header' style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        }}>
            <Logo/>
            <LoginButtons/>
        </div>
    )
}
