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



export const handleAddNewServiceReview = async (req, res) =>{
  console.log("Add new review:", req.body)
  console.log("req.user:", req.user)
  try{

      const textReview = await Serviceprovider.findByIdAndUpdate(
          req.body.postId,
          {
            $push: {
              reviews: {
                text: req.body.textReview,
                owner: req.user,
              },
            },
          },
          { new: true }
        ).populate({
          path: "message.owner",
          select: "firstName lastName email ",
        });
        console.log("newPost:", textReview);
    
        res.send({ success: true, post: textReview});
      } catch (error) {
        console.log("error handleAddReply:", error.message);
    
        res.send("Error in handleAddReply" + error.message);
      }
}

export const handleDeleteServiceMessage = async(req, res) => {
  console.log("handleDeleteRequestMessage body:", req.body)


  try {
    const newPost = await Serviceprovider.findByIdAndUpdate(
      req.body.postId,
      {
        $pull: {
          message: {
            _id: req.body.messageId,
          },
        },
      },
      {
        new: true,
      }
    );
    console.log("delete service messaage:", newPost)
    res.send({ success: true, post: newPost })
  } catch (error){
    console.log("Error deleting service message:", + error.message)
    res.send("Error deleting service message:", + error.message)
  }
}

export const handleDeleteServiceRequestMessage= async (req, res) => {
  
  console.log("handleDeleteRequestMessage body:", req.body)


  try {
    const newPost = await Servicerequest.findByIdAndUpdate(
      req.body.postId,
      {
        $pull: {
          message: {
            _id: req.body.messageId,
          },
        },
      },
      {
        new: true,
      }
    );

    console.log("delete service Request messaage:", newPost)
    res.send({ success: true, post: newPost })
  } catch (error){
    console.log("Error deleting service request message:", + error.message)
    res.send("Error deleting service request message:", + error.message)
  }
}
