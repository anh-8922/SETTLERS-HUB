
export const handleAddNewServiceRequset = (req, res) => {

    try{
        console.log("Add new service request")
        res.send( "add request")
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

