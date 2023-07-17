
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { HeroSectionC } from "../Components/HeroSection"
import MainLayout from "../Layout/MainLayout"
import ListCommunityPost from "../Features/CommunityPostsList"
import AddCommunitypost from "../Features/AddCommunityPost"
import { SpotlightNews } from "../Components/SpotLight"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import useFetchData from "../CustomHooks/useFetchData"
import "../Style/page.css"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import axios from "axios"
import { useCookies } from "react-cookie"

export default function CommunityPage() {
    const userID= useGetUserID ()
    console.log("user:", userID)
    const [ cookies, _] = useCookies(["access_token"])
    console.log("cookies:", cookies)
    const { data, error, refetch } = useFetchData(
    "http://localhost:5000/community/listpost"
  );
  console.log("data:", data);
  console.log("error:", error);
  const [show, setShow] = useState(false);


  useEffect(() => {
    refetch();
  }, []);

  const handleClose = () => {
    setShow(false);
    refetch();
  }



  const handleDeletePost = async (_id) => {
    console.log("post to delete:", _id)
    try {
      const response = await axios.delete(`/community/delete/${_id}`, {
        withCredentials: true
      });
      refetch();
    } catch (error) {
      console.log("Error deleting post:", error)
    }
  };

  const handleEditPost = () => {

  }

  const handleLikePosts = async () => {
    const response = await axios.post('/community/like', {})

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
                    handleLike={handleLikePosts}
                    handleDeletePost={handleDeletePost}
                    handleEditPost={handleEditPost} />
                ))}
            </div>
            <SpotlightNews />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
