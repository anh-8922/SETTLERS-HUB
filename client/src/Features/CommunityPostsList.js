

// import TimeAgo from "react-timeago";
// import "../Style/feature.css";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { FaRegComments } from "react-icons/fa"
// import { useState, useEffect } from "react"
// import { useGetUserID } from "../CustomHooks/useGetUserID"



// export default function ListCommunityPost({ _id, 
//                                             firstName, 
//                                             lastName, 
//                                             createdAt, 
//                                             handleLikePost, 
//                                             text, 
//                                             likes,
//                                             handleDeletePost, 
//                                             handleEditPost }) {
  
//                                               const [liked, setLiked] = useState(false)


//   const userID = useGetUserID()
//   console.log("user to like:", userID)

//   useEffect(() => {
//     console.log("likes:", likes);
//     console.log("userID:", userID)
//     // if (likes && likes.length > 0 && likes.some((like) => like._id == userID)) {
//       // if (likes && likes.length > 0 && likes.some((like) => String(like._id) === String(userID))) {
//         if (likes && likes.length > 0 && likes.some((like) => like._id.toString() === userID.toString())) {
//       setLiked(true);
//     } else {
//       setLiked(false);
//     }
//   }, [ userID])


//   const handleLike = () => {
//     handleLikePost(_id)
//     setLiked(!liked)
//   }



//   return (
//     <div key={_id} className="community_post_list">
//       <div><button onClick={() => handleEditPost(_id, text)}>Edit</button> <button onClick={() => handleDeletePost(_id)}>Delete</button></div>
//       <div className="post-owner" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
//         {firstName} <span>{lastName}</span>
//       </div>
//       <div className="post-topic">{text}</div>
//       <div>
//         <TimeAgo date={createdAt} />
//       </div>
//       <div>
//         {liked ? (
//           <AiFillHeart
//           className="heart-icon"
//           // className="text-red-500 text-[2rem] cursor-pointer"
//           // onClick={() => handleLikePost(_id)}
//           onClick={handleLike}
//         />

//         ) : (
//           <AiOutlineHeart
//             className="heart-icon"
//           // onClick={() => handleLikePost(_id)}
//           onClick={handleLike}
//         />

//         )}

//         {/* {liked ? <span>Liked</span> : <span>Like</span>} */}
      

//         <span>Likes: {likes}</span>
//         <FaRegComments className="text-slate-500 hover:text-red-500 text-[2rem] cursor-pointer" />
//       </div>
//       <div>comment</div>
//     </div>
//   );
// }


import TimeAgo from "react-timeago";
import "../Style/feature.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { useGetUserID } from "../CustomHooks/useGetUserID";
import { useEffect, useState } from "react";

export default function ListCommunityPost({
  _id,
  firstName,
  lastName,
  createdAt,
  handleLikePost,
  text,
  likes,
  handleDeletePost,
  handleEditPost,
  isPostLiked,
  // likedPostIds,
}) {

  // const isLiked = likedPostIds.includes(_id);

  // const handleLike = (_id) => {
  //   handleLikePost(_id);
  // }

  const handleLike = () => {
    handleLikePost(_id)
    // setIsLiked(!isLiked)
  }


  return (
    <div key={_id} className="community_post_list">
      <div>
        <button onClick={() => handleEditPost(_id, text)}>Edit</button>{" "}
        <button onClick={() => handleDeletePost(_id)}>Delete</button>
      </div>
      <div
        className="post-owner"
        style={{ fontSize: "1.2rem", fontWeight: "bold" }}
      >
        {firstName} <span>{lastName}</span>
      </div>
      <div className="post-topic">{text}</div>
      <div>
        <TimeAgo date={createdAt} />
      </div>
      <div>
        {isPostLiked? (
          <AiFillHeart
            className="heart-icon"
            onClick={handleLike}
            // onClick={() => handleLikePost(_id)}
          />
        ) : (
          <AiOutlineHeart
            className="heart-icon"
            onClick={handleLike}
            // onClick={() => handleLikePost(_id)}
          />
        )}

        <span>Likes: {likes}</span>
        <FaRegComments className="text-slate-500 hover:text-red-500 text-[2rem] cursor-pointer" />
      </div>
      <div>comment</div>
    </div>
  );
}
