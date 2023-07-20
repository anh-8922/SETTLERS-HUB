
import { useEffect, useState } from "react"
import { HeroSectionC } from "../Components/HeroSection"
import MainLayout from "../Layout/MainLayout"
import ListCommunityPost from "../Features/CommunityPostsList"
import AddCommunitypost from "../Features/AddCommunityPost"
import { SpotlightNews } from "../Components/SpotLight"
import Modal from "react-bootstrap/Modal"
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
    const [likedPostIds, setLikedPostIds] = useState([])

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data) {
      const likedPosts = data.communityPosts.filter((post) =>
        post.likes.some((like) => like._id === userID)
      );
      setLikedPostIds(likedPosts.map((post) => post._id))
    }
  }, [data])

  const handleClose = () => {
    setShow(false);
    refetch();
  }

  const handleCloseEdit = () => {
    setShowEdit(false)
    refetch()
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
      <div className="community-content">
        <div className="forum">
          <button onClick={() => setShow(true)}>Add New Post</button>
          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Add new post{" "}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddCommunitypost />
            </Modal.Body>
            <Modal.Footer>
              <button onClick={() => setShow(false)}>Cancel</button>
              <button onClick={handleClose}>Close</button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showEdit}
            onHide={handleCloseEdit}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Edit your post{" "}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditCommunitypost editPostId={editPostId} existingText={existingText}/>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={() => setShowEdit(false)}>Cancel</button>
              <button onClick={handleCloseEdit}>Close</button>
            </Modal.Footer>
          </Modal>
          <div className="communityRight">
            <div>
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
                    handleEditPost={(text) => handleEditPost(item._id, item.text)} 
                    likes={item.likes.length}
                    loggedInUserId={userID}
                    isPostLiked={likedPostIds.includes(item._id)}
                    isUser={item.owner}
                    />
                ))}
            </div>
            <SpotlightNews />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
