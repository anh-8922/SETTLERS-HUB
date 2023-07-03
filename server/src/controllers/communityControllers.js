import Communitypost from "../model/Communitypost.js"

export const handleAddPostToCommunity = async (req, res) =>{
    console.log(req.body)
    try{
        const {owner, text} = req.body
        console.log("Post owner:", owner)

        if (!owner || !text) {
            res.send({success: false, error: 1})
            return
        }

        const newPost = await Communitypost.create(req.body) 
        console.log("New post added:", newPost)
        res.send({success: true, message: "Post added successfully" })
    } catch (error){
        console.log("Error adding new post:" + error.message)
        res.send({success: false, error: "Internal server error" });
    }
}