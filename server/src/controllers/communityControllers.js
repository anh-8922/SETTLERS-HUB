import Communitypost from "../model/Communitypost.js"

export const handleAddPostToCommunity = async (req, res) =>{
    console.log("Add new community post:", req.body)
    console.log("Add new community post image file:", req.file)
    try{
        let  {owner, text, image} = req.body
        image  = req.file.filename
        console.log("Post owner:", owner)

        if (!owner || !text) {
            res.send({success: false, error: 1})
            return
        }

        const newPost = await Communitypost.create({
            text,
            image,
            owner

        }) 
        console.log("New post added:", newPost)
        res.send({success: true, message: "Post added successfully" })
    } catch (error){
        console.log("Error adding new post:" + error.message)
        res.send({success: false, error: "Internal server error" });
    }
}