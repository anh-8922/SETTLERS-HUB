import Communitypost from "../model/Communitypost.js"

export const handleAddReply = async (req, res) =>{
    console.log("Add new reply:", req.body)
    console.log("req.user:", req.user)
    try{

        const newReply = await Communitypost.findByIdAndUpdate(
            req.body.postId,
            {
              $push: {
                comments: {
                  text: req.body.replyPost,
                  owner: req.user,
                },
              },
            },
            { new: true }
          ).populate({
            path: "comments.owner",
            select: "firstName lastName email ",
          });
          console.log("newPost:", newReply);
      
          res.send({ success: true, post: newReply});
        } catch (error) {
          console.log("error handleAddReply:", error.message);
      
          res.send("Error in handleAddReply" + error.message);
        }
}

