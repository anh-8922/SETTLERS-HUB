
import Communitypost from "../model/Communitypost.js"

export const handleAddPostToCommunity = async (req, res) =>{
    console.log("Add new community post:", req.body)
    console.log("Add new community post image file:", req.file)
    try{
        let  {owner, text, image} = req.body
        image  = req.file.filename
        console.log("community post:", req.body)
        


        if (!owner || !text) {
            res.send({success: false, error: 1})
            return
        }
        const newPost = await (await Communitypost.create( {
            text,
            image,
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
            .populate({ path: "owner", select: "username email image firstName lastName" })
            .select("-__v")
            .limit(10)
            .skip(0)
            .sort({ _id: "desc" });
        console.log("Community post list:", communityPosts)
        res.send({success: true, communityPosts})
    } catch (error) {
        console.log('Error in List community post:', error.message)
        res.send("Error in List community post:"+ error.message)
    }
}