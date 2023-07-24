import Servicerequest from "../model/ServiceRequest.js"
import Serviceprovider from "../model/ServiceProvider.js";

export const handleAddMessage = async (req, res) =>{
    console.log("Add new reply:", req.body)
    console.log("req.user:", req.user)
    try{

        const textMesaage = await Servicerequest.findByIdAndUpdate(
            req.body.postId,
            {
              $push: {
                message: {
                  text: req.body.textMesaage,
                  owner: req.user,
                },
              },
            },
            { new: true }
          ).populate({
            path: "message.owner",
            select: "firstName lastName email ",
          });
          console.log("newPost:", textMesaage);
      
          res.send({ success: true, post: textMesaage});
        } catch (error) {
          console.log("error handleAddReply:", error.message);
      
          res.send("Error in handleAddReply" + error.message);
        }
}


export const handleAddNewServiceMessage = async (req, res) =>{
  console.log("Add new reply:", req.body)
  console.log("req.user:", req.user)
  try{

      const textMesaage = await Serviceprovider.findByIdAndUpdate(
          req.body.postId,
          {
            $push: {
              message: {
                text: req.body.textMesaage,
                owner: req.user,
              },
            },
          },
          { new: true }
        ).populate({
          path: "message.owner",
          select: "firstName lastName email ",
        });
        console.log("newPost:", textMesaage);
    
        res.send({ success: true, post: textMesaage});
      } catch (error) {
        console.log("error handleAddReply:", error.message);
    
        res.send("Error in handleAddReply" + error.message);
      }
}

