

import TimeAgo from "react-timeago";
import "../Style/feature.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa"
import { useState, useEffect } from "react"


export default function ListCommunityPost({ _id, 
                                            firstName, 
                                            lastName, 
                                            createdAt, 
                                            handleLikePost, 
                                            text, 
                                            likes,
                                            handleDeletePost, 
                                            handleEditPost }) {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${_id}`)
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked))
    }
  }, [])

  const handleLike = () => {
    handleLikePost(_id)
    const updatedLiked = !liked
    setLiked(updatedLiked)
    localStorage.setItem(`liked_${_id}`, JSON.stringify(updatedLiked))
  }

  return (
    <div key={_id} className="community_post_list">
      <div><button onClick={() => handleEditPost(_id, text)}>Edit</button> <button onClick={() => handleDeletePost(_id)}>Delete</button></div>
      <div className="post-owner" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {firstName} <span>{lastName}</span>
      </div>
      <div className="post-topic">{text}</div>
      <div>
        <TimeAgo date={createdAt} />
      </div>
      <div>
        {liked ? (
          <AiFillHeart
          className="heart-icon"
          // className="text-red-500 text-[2rem] cursor-pointer"
          // onClick={() => handleLikePost(_id)}
          onClick={handleLike}
        />

        ) : (
          <AiOutlineHeart
            className="heart-icon"
          // onClick={() => handleLikePost(_id)}
          onClick={handleLike}
        />

        )}

        {/* {liked ? <span>Liked</span> : <span>Like</span>} */}
      

        <span>Likes: {likes}</span>
        <FaRegComments className="text-slate-500 hover:text-red-500 text-[2rem] cursor-pointer" />
      </div>
      <div>comment</div>
    </div>
  );
}
