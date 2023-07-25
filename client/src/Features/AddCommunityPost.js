import { useCookies } from "react-cookie"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import { useState } from "react"
import noimage from '../Assets/noimage.png'
import axios from "axios"
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'


export default function AddCommunitypost () {
    
    const userID = useGetUserID ()
    console.log("Add Community post uesrID:", userID)
    const [ cookies, _] = useCookies(["access_token"])
    console.log("acess:", cookies)
    const [text, setText] = useState ( " ")
    console.log("texte:", text)
    console.log("access:", cookies)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [emptyTextError, setEmptyTextError] = useState(false)
    const [invalidUser, setInvalidUser] = useState(false)
    

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("text", text);
        formData.append("owner", userID );

        if (!text || text.trim() === "") {
          setEmptyTextError(true)
          console.log("Post text cannot be empty");
          return
        }

        if (!userID) {
          setInvalidUser(true)
          console.log("Post text cannot be empty");
          return
        }
       
    
        try {
          const response = await axios.post("/community/addnewpost", formData, {
            withCredentials: true,
            headers: {
              "Content-type": "multipart/form-data; charset=UTF-8",
              Authorization: `Bearer ${cookies.access_token}`
            },
          });
    
          setFormSubmitted(true)
          console.log("Response:", response)
        } catch (error) {
          console.log("Error:", error);
        }
      };

    return (
        <div>
            <div className="AddNewPostToCommunity">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              id="text"
              value={text}
              required={true}
              onChange={(e) => setText(e.target.value)}
              style={{width:"40rem", height:"10rem"}}
            />
            
            <div style={{display:"flex", alignSelf:"center"}}>
            <button type="submit"style={{marginTop:"2rem",fontSize:"1.5rem", width:"8rem", backgroundColor:"#38AA5E"}}>Submit</button>
            </div>
          </form>
        ) : (
          <div
            style={{
              color: "green",
              fontSize: "3rem",
              display: "flex",
              justifyContent: "center",
              marginTop: "30%",
              alignContent: "center",
            }}
          >
            Post Created Successfully!
          </div>
        )}
      </div>
      {emptyTextError && (
          <div style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end", marginRight:"3rem"}}>
          <Stack sx={{ width: '30%' }} spacing={2} >
                <Alert variant="filled" severity="error">
                  <AlertTitle style={{ color: 'white' }}>Error</AlertTitle>
                  <strong style={{ color: 'white' }}>Post can not be empty!</strong>
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