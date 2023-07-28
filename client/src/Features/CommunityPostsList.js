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
  comments,
  likes,
}) {

  const handleLike = () => {
    handleLikePost(_id)
  }

  const isCurrentUserOwner = isUser && isUser._id === loggedInUserId

  return (
    <div key={_id} className="community_post_list">
      <div className="post-heading">
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }} className="post-topic">Ask: {text}</div>
              { isCurrentUserOwner? (
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" style={{backgroundColor:'whitesmoke', color:'grey'}}>
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
        <div className="author-time">
          <div style={{fontSize:'1.1rem'}}><span style={{marginRight:'5px', fontWeight:'bold'}}>Author:</span>
            {firstName} <span>{lastName}</span>
          </div>
          <div style={{fontSize:'1.1rem'}}>
            <span style={{marginRight:'5px', fontWeight:'bold'}}>Date:</span><TimeAgo date={createdAt} />
          </div>
          <div >
            <span style={{marginRight:'5px', fontWeight:'bold'}}>Like:</span> 
            {isPostLiked ? (
              <>
              <AiFillHeart id="like-icon"
              // onClick={() => handleLikePost(_id)}
              onClick={handleLike}
            />
              <span style={{marginLeft:'10px', fontWeight:'500'}}>{likes}</span>
            </>
            ) : (
              <AiOutlineHeart
              className="text-red-500 text-[2rem] cursor-pointer"
              // onClick={() => handleLikePost(_id)}
              onClick={handleLike}
            />

            )}

          </div>
        </div>
        <div className="like-reply">
          
          <button className="reply-button" onClick={() => handleReplyPost()}>Answer</button>
        </div>
      </div>
      <div className="post-footer">
          {comments && comments.length > 0 && (
                      <div>
                        <div style={{fontSize:'1.1rem', marginRight:'5px', fontWeight:'bold'}}>Replies</div>
                        {comments.map((comment) => (
                          <div key={comment._id}>
                            <div>
                            <span style={{marginRight:'5px', fontWeight:'bold'}}>User: </span><span style={{ marginRight: "2px" }} />
                              {comment.owner.firstName} <span>{comment.owner.lastName}</span>
                            </div>
                            <div><span style={{marginRight:'5px', fontWeight:'bold'}}>Reply:</span> {comment.text}</div>
                          </div>
                        ))}
                      </div>
            )}

      </div>
    </div>
  );
}
