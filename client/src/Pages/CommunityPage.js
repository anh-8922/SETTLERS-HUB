import { useEffect, useState } from "react"
import { HeroSectionC } from "../Components/HeroSection"
import MainLayout from "../Layout/MainLayout"
import ListCommunityPost from "../Features/CommunityPostsList"
import AddCommunitypost from "../Features/AddCommunityPost"
import { SpotlightNews } from "../Components/SpotLight"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useFetchData from "../CustomHooks/useFetchData"
import "../Style/page.css"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import axios from "axios"
import { useCookies } from "react-cookie"
import EditCommunitypost from "../Components/EditCommunityPost"

export default function CommunityPage() {
    const userID= useGetUserID ()
    console.log("user:", userID)
    const [ cookies, _] = useCookies(["access_token"])
    console.log("cookies:", cookies)
    const { data, error, refetch } = useFetchData("http://localhost:5000/community/listpost" )
    console.log("data:", data);
    console.log("error:", error);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false)
    const [existingText, setExistingText] = useState("")
    const [editPostId, setEditPostId] = useState(null)

  useEffect(() => {
    refetch();
  }, []);

  const handleClose = () => {
    setShow(false);
    refetch();
  }

  const handleCloseEdit = () => {
    setShowEdit(false);
    refetch();
  }



  const handleDeletePost = async (_id) => {
    console.log("post to delete:", _id)
    try {
      const response = await axios.delete(`/community/delete/${_id}`, {
        withCredentials: true
      });
      refetch();
      console.log("handleDeletePost:" , response)
    } catch (error) {
      console.log("Error deleting post:", error)
    }
  };

  const handleEditPost = (_id, text) => {
    console.log("post to edit:", _id)
    setExistingText(text)
    console.log("exisiting text:", text)
    setEditPostId(_id)
    console.log("exisiting id:", _id)
    setShowEdit(true)
  }

  const handleLikePosts = async (_id) => {
    console.log("post to like:", _id)
    console.log("liked user:", userID)
    try{
      const response = await axios.put('/community/like',{ _id},{
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log("like response:", response)
      refetch()
    } catch (error) {
      console.log("Error like post:", error)

    }

  }
  return (
    <MainLayout>
      <HeroSectionC />
      <div className="forum">
          <CommunityBar/>
          <div className="community-content">
            <div className="fetched-community-list">
              {data &&
                data.communityPosts.map((item) => (
                  <ListCommunityPost
                    key={item._id}
                    _id={item._id}
                    firstName={item.owner.firstName}
                    lastName={item.owner.lastName}
                    createdAt={item.createdAt}
                    text={item.text}
                    handleLikePost={handleLikePosts}
                    handleDeletePost={handleDeletePost}
                    handleEditPost={(text) => handleEditPost(item._id, item.text)} />
                ))}
            </div>
            <SpotlightNews />
          </div>
      </div>
    </MainLayout>
  )
}

function CommunityBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
    <div className="community-bar">
      <button onClick={handleOpen}>Add new post</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddCommunitypost/>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};