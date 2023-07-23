import TimeAgo from "react-timeago";
import "../Style/feature.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa"
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {SlOptions} from 'react-icons/sl';

export default function ListCommunityPost({
  _id,
  firstName,
  lastName,
  createdAt,
  handleLikePost,
  text,
  handleDeletePost,
  handleEditPost,
  isPostLiked,
  isUser,
  loggedInUserId,
  handleReplyPost,
  comments
}) {

  const handleLike = () => {
    handleLikePost(_id)
  }

  const isCurrentUserOwner = isUser && isUser._id === loggedInUserId

  return (
    <div key={_id} className="community_post_list">
      <div className="edit-del">
  
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }} className="post-topic">Ask: {text}</div>
       
              { isCurrentUserOwner? (
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <SlOptions/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEditPost(_id, text)}>Edit</Dropdown.Item>{" "}
                      <Dropdown.Item onClick={() => handleDeletePost(_id)}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                </div>
              ): null}                                         
          
          
        
      </div>
      <div className="post-details">
        <div className="like-reply">
          <div style={{fontSize:'1.5rem', padding:'none'}}>
            {isPostLiked ? (
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

          </div>
          <button onClick={() => handleReplyPost()}>Reply</button>
        </div>
        <div className="author-time">
          <div className="post-owner" >Author: <span style={{marginRight:'2px'}}/>
            {firstName} <span>{lastName}</span>
          </div>
      
          <div>
            Date:<span style={{marginRight:'2px'}}/><TimeAgo date={createdAt} />
          </div>
        </div>

        {comments && comments.length > 0 && (
                  <div>
                    <div>Replies</div>
                    {comments.map((comment) => (
                      <div key={comment._id}>
                        <div>
                          User: <span style={{ marginRight: "2px" }} />
                          {comment.owner.firstName} <span>{comment.owner.lastName}</span>
                        </div>
                        <div>Reply: {comment.text}</div>
                      </div>
                    ))}
                  </div>
                )}
      
      </div>
    </div>
  );
}
