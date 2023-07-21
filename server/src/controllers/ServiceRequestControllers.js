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

export const handleListServiceRequset = (req, res) => {


    try{
        console.log("List service request")
        res.send("List requests")
    } catch (error) {
        console.log("Error in list service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleListRequestAdsByUSer = (req, res) => {

    try{
        console.log("List service request by user")
        res.send("list by user")
    } catch (error) {
        console.log("Error in list service request by user:" + error.message)
        res.send({success: false, error})
    }
}

export const handeleDeleteRequest = (req, res) => {

    try{
        console.log("Delete service request")
        res.send("Delete request")
    } catch (error) {
        console.log("Error in deleting service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleEditRequest = (req, res) => {

    try{
        console.log("Edit service request")
        res.send("Edit request")
    } catch (error) {
        console.log("Error in editing service request:" + error.message)
        res.send({success: false, error})
    }
}

export const handleListOneServiceRequset = (req, res) => {

    try{
        console.log("List one service request")
        res.send("List one service request")
    } catch (error) {
        console.log("Error in list one service request:" + error.message)
        res.send({success: false, error})
    }
}

