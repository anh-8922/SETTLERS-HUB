import TimeAgo from "react-timeago";
import "../Style/feature.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa"
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {SlOptions} from 'react-icons/sl';

export default function ListCommunityPost({ _id, 
                                            firstName, 
                                            lastName, 
                                            createdAt, 
                                            handleLikePost, 
                                            text, 
                                            handleDeletePost, 
                                            handleEditPost }) {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    handleLikePost(_id)
    setLiked(!liked)
  }

  return (
    <div key={_id} className="community_post_list">
      <div className="edit-del">
  
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }} className="post-topic">Ask: {text}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <SlOptions/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleEditPost(_id, text)}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDeletePost(_id)}>Delete</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          
        
      </div>
      <div className="post-details">
        <div className="like-reply">
          <div style={{fontSize:'1.5rem', padding:'none'}}>
            {liked ? (
              <AiFillHeart id="like-icon"
              // onClick={() => handleLikePost(_id)}
              onClick={handleLike}
            />

            ) : (
              <AiOutlineHeart
              className="text-red-500 text-[2rem] cursor-pointer"
              // onClick={() => handleLikePost(_id)}
              onClick={handleLike}
            />

            )}

            {/* {liked ? <span>Liked</span> : <span>Like</span>} */}
          


            {/*<FaRegComments className="text-slate-500 hover:text-red-500 text-[2rem] cursor-pointer" />*/}
          </div>
          <button>Reply</button>
        </div>
        <div className="author-time">
          <div className="post-owner" >Author: <span style={{marginRight:'2px'}}/>
            {firstName} <span>{lastName}</span>
          </div>
      
          <div>
            Date:<span style={{marginRight:'2px'}}/><TimeAgo date={createdAt} />
          </div>
          
        </div>
      </div>
      
      
      
      
      
    </div>
  );
}
