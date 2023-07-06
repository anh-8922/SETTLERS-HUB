import { useCookies } from "react-cookie"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import { useState } from "react"
import noimage from '../Assets/noimage.png'
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function AddCommunitypost () {
    const userID = useGetUserID ()
    console.log("Add Community post ueseID:", userID)
    const [cookies, _] = useCookies(["access_token"])
    const [text, setText] = useState ( " ")
    const [image, setImage] = useState({
        url: noimage,
        file: null,
      });
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const navigate = useNavigate();

    const handleImageChange = (e) => {

        setImage({
          url: URL.createObjectURL(e.currentTarget.files[0]),
          file: e.currentTarget.files[0],
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("text", text);
        formData.append("image", image.file);
        formData.append("owner", userID );
    
        try {
          const response = await axios.post("/community/addnewpost", formData, {
            headers: {
              "Content-type": "multipart/form-data; charset=UTF-8;  authorization: cookies.access_token",
            },
          });
    
          setFormSubmitted(true);
          console.log("Response:", response);
          // navigate("/user");
        } catch (error) {
          console.log("Error:", error);
        }
      };

    return (
        <div>
            <div className="AddNewPostToCommunity">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            
            <label style={{display:"flex", gap:"2rem", marginTop:"2rem",fontSize:"1.2rem"}}>
            <textarea
              type="text"
              id="text"
              // placeholder="Instructions"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{width:"40rem", height:"40rem"}}
            />
            </label>
            <div>
            <img style={{marginTop:"2rem", width:"30rem", height:"30rem"}}
                className="w-[300px] h-[300px] object-cover"
                src={image.url || noimage}
                alt=""
              />
              <label style={{display:"flex", gap:"2rem", marginTop:"2rem",fontSize:"1.5rem"}}>Add an image:
              <input
                type="file"
                accept="image/png, image/jpeg"
                name="image"
                onChange={handleImageChange}
                style={{marginTop:"2rem", width:"20rem", height:"8rem"}}
              />
              </label>

              
            </div >
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
        </div>
    )
}