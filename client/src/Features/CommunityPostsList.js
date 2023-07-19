


import TimeAgo from "react-timeago";
import "../Style/feature.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

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
}) {


  const handleLike = () => {
    handleLikePost(_id)
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
          />
        ) : (
          <AiOutlineHeart
            className="heart-icon"
            onClick={handleLike}
          />
        )}

        <span>Likes: {likes}</span>
        <FaRegComments className="text-slate-500 hover:text-red-500 text-[2rem] cursor-pointer" />
      </div>
      <div>comment</div>
    </div>
  );
}
