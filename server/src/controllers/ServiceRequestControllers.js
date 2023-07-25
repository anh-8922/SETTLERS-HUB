import Servicerequest from "../model/ServiceRequest.js"

export const handleAddNewServiceRequset = async (req, res) => {
    console.log("add service request:", req.body)
    console.log("req user add service request:", req.user)
    try{
        if (!req.user)return res.send({ success: false, error: "Unauthorized" })

        let {
            category,
            owner,
            subject,
            location,
            telephone,
            description,
            featured,
          } = req.body
           owner = req.user

           if (
            !category ||
            !subject ||
            !location ||
            !telephone ||
            !description || description.trim() === ""
            ) {
                return res.send({ success: false, error: "All fields must be filled" });
              }
    
        const newRequestPost = await Servicerequest.create(
            {
                category,
                owner,
                subject,
                location,
                telephone,
                description,
                featured,
              }
        )
        console.log("Add new service request:", newRequestPost)
        res.send({success: true, newRequestPost})
    } catch (error) {
        console.log("Error in adding service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleListServiceRequset = async (req, res) => {
    console.log("handle List Service request Ads:", req.body)

    try{
        const serviceRequestAds = await Servicerequest.find()
        .populate({
            path: "owner",
            select: "username email image firstName lastName",
        })
        .populate({
            path: "message.owner",
            select: "username email image firstName lastName",
        })
        .select ("-__v")
        .sort({ _id: "desc" })
        console.log("New Service post:", serviceRequestAds)
        res.send({success: true, serviceRequestAds})

    } catch (error) {
        console.log("Error in list service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleListRequestAdsByUSer = async(req, res) => {

    try{
        const owner = req.query.owner
        console.log("owner:", owner)
        if (!owner) return res.send({ success: false, error: "User id is not provided" })

        if (!req.user) return res.send({ success: false, error: "Unauthorized" })

        const adverticedRequestByUser = await Servicerequest.find({owner: owner})
        // .select(" _id category location subject  createdAt message.text  ") 
        .populate({
            path: "message.owner",
            select: "username email image firstName lastName"

        })
        // .populate({
        //     path: "message.text",
        //     select: "text"

        // })

        console.log("List service request by user:", adverticedRequestByUser)
        res.send({success: true, adverticedRequestByUser})

    } catch (error) {
        console.log("Error in list service request by user:" + error)
        res.send({success: false, error})
    }
}

export const handeleDeleteRequest = async (req, res) => {
    console.log("Delete Service Request Ad:", req.params)
    try{
        if (!req.user) return res.send({ success: false, error: "Unauthorized" })
        
        const deleteRequest = await Servicerequest.findByIdAndDelete(req.params.id)
        console.log("Delete service request:", deleteRequest)
        res.send({ success: true, deleteRequest})
    } catch (error) {
        console.log("Error in deleting service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleEditRequest = async (req, res) => {
    const id = req.params.id
    console.log("Service request to edit:", id)
    console.log("User:", req.user)

    try{
        if (!req.user) {
            return res.send({ success: false, error: "Unauthorized" })
          }
          if (!id) {
            return res.send({ success: false, error: "Service Request ID is not provided" })
          }
          let {
            category,
            owner,
            subject,
            location,
            telephone,
            description,
            featured,
          } = req.body
           owner = req.user

           if (
            !category ||
            !subject ||
            !location ||
            !telephone ||
            !description || description.trim() === ""
            ) {
                return res.send({ success: false, error: "All fields must be filled" });
              }
              const editedRequestPost = await Servicerequest.findByIdAndUpdate(
                id,
                {
                    category,
                    owner,
                    subject,
                    location,
                    telephone,
                    description,
                    featured,
                  },
                  { new: true }
            )    
        console.log("Edit service request:", editedRequestPost)
        res.send({success: true, editedRequestPost})
    } catch (error) {
        console.log("Error in editing service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleListOneServiceRequset = async (req, res) => {

    try{
        const id = req.params.id
        if (!id) return res.send({ success: false, error: "Service request id is not provided" })
        const selectedServiceRequestAd = await Servicerequest.findById (id)
        console.log("List one service request ad:", selectedServiceRequestAd)
        res.send({success: true, selectedServiceRequestAd})
    } catch (error) {
        console.log("Error in list one service request:" + error.message)
        res.send({success: false, error})
    }
}

