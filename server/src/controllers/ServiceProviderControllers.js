import Serviceprovider from "../model/ServiceProvider.js";

export const handleAddNewServiceProvider = async ( req, res) => {
    console.log("add service:", req.body)
    console.log("req user add service:", req.user)
    
    try{
        if (!req.user)return res.send({ success: false, error: "Unauthorized" })
        
        
        let {
            category,
            owner,
            subject,
            location,
            rate,
            experience,
            qulifications,
            telephone,
            description,
            featured,
          } = req.body
           owner = req.user
          if (!description || description.trim() === "") {
            res.send({success: false, error: "Text field is empty"})
            return
        }

        const newServicePost = await Serviceprovider.create({
            category,
            owner,
            subject,
            location,
            rate,
            experience,
            qulifications,
            telephone,
            description,
            featured,
        })
        console.log("Add new service provider")
        res.send({success: true, newServicePost})
    } catch (error) {
        console.log("Error in adding service provider:" + error.message)
        res.send({success: false, error})
    }
}

export const handleListServiceProviders = (req, res) => {

    try{
        console.log("New Service post:", newServicePost)
        res.send({success: true, newServicePost})
    } catch (error) {
        console.log("Error in list service providers:",  + error.message)
        res.send("Error in list service providers")
    }
}
export const handleListServiceAdssByUSer = (req, res) => {

    try{
        console.log("List serice by users")
        res.send("List serice by users")
    } catch (error) {
        console.log("Error list service by  user")
        res.send("Error list service by  user")
    }
}

export const handeleDeleteService = (req, res) => {
    try{
        console.log("delete service")
        res.send("delete service")
    } catch (error) {
        console.log("Error delete service")
        res.send("Error delete service")
    }

}

export const handleEditSerice = (req, res) => {
    try{
        console.log("delete service")
        res.send("delete service")
    } catch (error) {
        console.log("Error delete service")
        res.send("Error delete service")
    }

}

export const handleListOneServiceProvider = (req, res) => {
    try{
        console.log("delete service")
        res.send("delete service")
    } catch (error) {
        console.log("Error delete service")
        res.send("Error delete service")
    }

}