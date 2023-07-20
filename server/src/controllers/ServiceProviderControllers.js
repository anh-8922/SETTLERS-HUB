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

export const handleListServiceProviders = async (req, res) => {
    console.log("handle List Service providers Ads:", req.body)
    try{
        const serviceProvidersAds = await Serviceprovider.find()
        .populate({
            path: "owner",
            select: "username email image firstName lastName",
        })
        .select ("-__v")
        .sort({ _id: "desc" })
        console.log("New Service post:", serviceProvidersAds)
        res.send({success: true, serviceProvidersAds})
    } catch (error) {
        console.log("Error in list service providers:",  + error.message)
        res.send({success: false, error: message})
    }
}


export const handleListServiceAdsByUSer = async (req, res) => {

    try{
        const owner = req.query.owner
        console.log("owner:", owner)
        if (!owner) return res.send({ success: false, error: "User id is not provided" })

        if (!req.user) return res.send({ success: false, error: "Unauthorized" })

        const adverticedServiceByUser = await Serviceprovider.find({owner: owner})
        .select("category location rate createdAt ") 

        console.log("List serice by users:", adverticedServiceByUser)
        res.send({success: true, adverticedServiceByUser})
    } catch (error) {
        console.log("Error list service by  user:", + error.message)
        res.send({success: false, error: message})
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