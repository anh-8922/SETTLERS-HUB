
import Communitypost from "../model/Communitypost.js"

export const handleAddPostToCommunity = async (req, res) =>{
    console.log("Add new community post:", req.body)
    console.log("req.user:", req.user)
   
    // console.log("Add new community post image file:", req.file)
    try{

        if (!req.user) return res.send({ success: false, error: "Unauthorized" })

        let  {owner, 
              text, 
            //   image
            } = req.body
              
        // image  = req.file.filename
        console.log("community post:", req.body)
        


        if (!text || text.trim() === "") {
            res.send({success: false, error: "Text field is empty"})
            return
        }
        const newPost = await (await Communitypost.create( {
            text,
            // image,
            owner
        })).populate({
            path: "owner",
            select: "username email image firstName lastName",
        })
           
        console.log("New post added:", newPost)
        res.send({success: true, newPost })
    } catch (error){
        console.log("Error adding new post:" + error.message)
        res.send({success: false, error: "Internal server error" });
    }
}




export const handleListPostFromCommunity = async (req, res) => {
    console.log("handleListPostFromCommunity:", req.body)

    try{
        const communityPosts = await Communitypost.find()
            .populate({ 
              path: "owner", 
              select: "username email image firstName lastName" })
            .populate({
              path: "likes",
              select: "username email image firstName lastName",
            })
            .populate({
              path: "comments.owner",
              select: "username email image firstName lastName",
            })
            .select("-__v")
            .limit(30)
            .skip(0)
            .sort({ _id: "desc" });
        console.log("Community post list:", communityPosts)
        res.send({success: true, communityPosts})
    } catch (error) {
        console.log('Error in List community post:', error.message)
        res.send("Error in List community post:"+ error.message)
    }
}


export const handleLikePost = async (req, res) => {
    console.log("reqsert user like:", req.user)
    console.log("handle Like:", req.body)
    try{
      const likedPost = await Communitypost.findOne({
        _id: req.body._id,
        likes : { $elemMatch: {$eq: req.user}}
      })
      console.log("liked post:", likedPost)
      let newLikedPost = {}
      if(!likedPost) {
        newLikedPost = await Communitypost.findByIdAndUpdate(
          req.body,
          {
            $push: {likes: req.user}
          },
          {new: true}
        )
        .populate({
          path: "owner",
          select: "username email image firstName lastName",
        })
        .populate({
          path: "likes",
          select: "username email image firstName lastName",
        })
        console.log("newLiked Post:", newLikedPost)
      } else {
        newLikedPost = await Communitypost.findByIdAndUpdate(
          req.body,
          {
            $pull: { likes: req.user }
          },
          {
            new: true,
          }
        )
        .populate({
          path: "owner",
          select: "username email image firstName lastName",
        })
        .populate({
          path: "likes",
          select: "username email image firstName lastName",
        })
        console.log("newLiked Post:", newLikedPost)
      }
      
        res.send({ success: true, post: newLikedPost })
    } catch (error) {
        console.log("error handleLike:", error.message)

        res.send("Error in handleLike" + error.message)
    }
}


export const handleDeleteCommunityPost = async (req, res) => {
    console.log("request user delete", req.user)
    console.log("handleDelete:", req.params.id)
  
    try {
      if (!req.user) return res.send({ success: false, error: "Unauthorized" });
  
      const postToDelete = await Communitypost.findOneAndDelete({
        _id: req.params.id,
        owner: req.user 
      });
  
      if (!postToDelete) {
        return res.send({ success: false, error: "Post not found" })
      }
  
      console.log("post to delete:", postToDelete)
      res.send({ success: true, postToDelete })
    } catch (error) {
      console.log("error handle delete:", error.message)
  
      res.send("Error in handle delete" + error.message)
    }
  }
  


export const handleEditCommunityPost = async (req, res) => {
  console.log("request user edit", req.user);
  const id = req.params.id;
  console.log("handle edit community post:", req.params.id);
  console.log("edit post:", req.params);
  console.log("edit body:", req.body);

  try {
    const text = req.body.text
    console.log("text:", text)

    if (!req.user) return res.send({ success: false, error: "Unauthorized" });

    if (!text) {
      res.send({ success: false, error: "Text field is empty" });
      return;
    }

    const editedCommunityPost = await Communitypost.findById(id);

    if (!editedCommunityPost) {
      return res.send({ success: false, error: "Post not found" });
    }

    const postOwner = editedCommunityPost.owner.toString()
    console.log("post owner:", postOwner)
    const currentUser = req.user
    console.log("current user:", currentUser)

    if (postOwner !== currentUser) {
      return res.send({ success: false, error: "Not authorized to edit this post" })
    }

    editedCommunityPost.text = text
    const savedPost = await editedCommunityPost.save()

    console.log("community post to edit:", savedPost)
    res.send({ success: true, editedCommunityPost: savedPost })
  } catch (error) {
    console.log("Error in handle edit community post" + error.message)
    res.send("Error in handle edit community post" + error.message)
  }
}

