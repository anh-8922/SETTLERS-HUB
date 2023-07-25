import axios from "axios"
import { useState } from "react"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUserID } from "../CustomHooks/useGetUserID";
import { useCookies } from "react-cookie"

export default function AddServiceMessages ({ postId, handleCloseMessage }) {
    const userID = useGetUserID()
    const [ cookies, _] = useCookies(["access_token"])
    console.log("post id:", postId)
    const [textMesaage, setTextMassage] = useState ('')
    const [isSubmit, setSubmit] = useState (false)
    const [emptyTextError, setEmptyTextError] = useState (false)
    const [invalidUser, setInvalidUser] = useState (false)
    const navigate = useNavigate()

    
    const handleCancel = () => {
      handleCloseMessage();
    };

    const handleSubmitMessage= async (e) => {

        e.preventDefault();

        if (!textMesaage || textMesaage.trim() === "") {
          setEmptyTextError(true);
          console.log("Post text cannot be empty")
          return;
        }
        if (!userID) {
            setInvalidUser(true);
            console.log("Post text cannot be empty")
            return;
          }
        const response = await axios.put('http://localhost:5000/message/addnewservicemessage' ,
        {textMesaage, postId},{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookies.access_token}`
              },
        })
        console.log("Response:", response);
        if (response.data.success === false){
          setSubmit(false)
          // navigate("/profile")
        }
          if (response.data.success === true){
            setSubmit(true)
            handleCloseMessage()
            // navigate("/")
          }

        
    }
    return(
        <div>
            {!isSubmit? (
                <form onSubmit={handleSubmitMessage}>
                <label
                  style={{
                    display: "flex",
                    gap: "2rem",
                    marginTop: "2rem",
                    fontSize: "1.2rem",
                  }}
                >
                  <textarea
                    type="text"
                    id="text"
                    value={textMesaage}
                    // required={true}
                    onChange={(e) => setTextMassage(e.target.value)}
                    style={{ width: "40rem", height: "40rem" }}
                  />
                </label>
                <div style={{ display: "flex", alignSelf: "center" }}>
                <button
                    type="button"
                    onClick={handleCancel}
                    style={{
                      marginTop: "2rem",
                      fontSize: "1.5rem",
                      width: "8rem",
                      backgroundColor: "#AA3838", 
                      marginRight: "1rem", 
                      color:'white'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      marginTop: "2rem",
                      fontSize: "1.5rem",
                      width: "8rem",
                      backgroundColor: "#38AA5E",
                      color:'white'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>


            ):(
                <div style={{display:"flex", justifyContent:"flex-end", marginRight:"3rem"}}>
        <Stack sx={{ width: '30%' }} spacing={2} onClose={() => navigate("/service")}>
              <Alert variant="filled" severity="success" >
                <AlertTitle style={{ color: 'white' }}>Sucess</AlertTitle>
                <strong style={{ color: 'white' }}>Message Added Successfully!</strong>
              </Alert>
              </Stack>
        </div>
            )}


{emptyTextError && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: "3rem",
          }}
        >
          <Stack sx={{ width: "30%" }} spacing={2} >
            <Alert variant="filled" severity="error"  onClick={() => navigate("/service")}>
              <AlertTitle style={{ color: "white" }} >Error</AlertTitle>
              <strong style={{ color: "white" }}>
                Message can not be empty!
              </strong>
            </Alert>
          </Stack>
        </div>
      )}


{invalidUser && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: "3rem",
          }}
        >
          <Stack sx={{ width: "30%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              <AlertTitle style={{ color: "white" }}>Error</AlertTitle>
              <strong style={{ color: "white" }}>
                Unauthorized!. Please login!
              </strong>
            </Alert>
          </Stack>
        </div>
      )}

        </div>
    )
}