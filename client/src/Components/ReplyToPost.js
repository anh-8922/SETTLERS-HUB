import axios from "axios"
import { useState } from "react"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUserID } from "../CustomHooks/useGetUserID";
import { useCookies } from "react-cookie"

export default function ReplyToAPost ({ postId }) {
    const userID = useGetUserID()
    const [ cookies, _] = useCookies(["access_token"])
    console.log("post id:", postId)
    const [replyPost, setRelpyPost] = useState ('')
    const [isSubmit, setSubmit] = useState (false)
    const [emptyTextError, setEmptyTextError] = useState (false)
    const navigate = useNavigate()

    const handleSubmitReply = async (e) => {

        e.preventDefault();

        if (!replyPost || replyPost.trim() === "") {
          setEmptyTextError(true);
          console.log("Post text cannot be empty")
          return;
        }
        const response = await axios.put('/reply/addnewreply' ,
        {replyPost, postId},{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookies.access_token}`
              },
        })
        console.log("Response:", response);
          if (response.data.success === true){
            setSubmit(true)
            // navigate("/profile")
          }
        
    }
    return(
        <div>
            {!isSubmit? (
                <div>
                        <input
                            type="text"
                            required={true}
                            value={replyPost}
                            onChange={(e) => setRelpyPost(e.target.value)}/>
            
                        <button onClick={handleSubmitReply}> Submit</button>
                </div>
            ):(
                <div style={{display:"flex", justifyContent:"flex-end", marginRight:"3rem"}}>
        <Stack sx={{ width: '30%' }} spacing={2} onClick={() => navigate("/community")}>
              <Alert variant="filled" severity="success">
                <AlertTitle style={{ color: 'white' }}>Sucess</AlertTitle>
                <strong style={{ color: 'white' }}>Reply Added Successfully!</strong>
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
          <Stack sx={{ width: "30%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              <AlertTitle style={{ color: "white" }}>Error</AlertTitle>
              <strong style={{ color: "white" }}>
                Reply cannot be empty!
              </strong>
            </Alert>
          </Stack>
        </div>
      )}

        </div>
    )
}