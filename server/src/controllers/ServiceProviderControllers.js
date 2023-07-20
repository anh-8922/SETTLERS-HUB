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

           if (
            !category ||
            !subject ||
            !location ||
            !rate ||
            !experience||
            !qulifications ||
            !telephone ||
            !description || description.trim() === ""
            ) {
                return res.send({ success: false, error: "All fields must be filled" });
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
        res.send({success: false, error})
    }
}



export const handeleDeleteService = async (req, res) => {
    console.log("Delete Service Ad:", req.params)

    try{
        if (!req.user) return res.send({ success: false, error: "Unauthorized" })
        
        const deleteService = await Serviceprovider.findByIdAndDelete(req.params.id)

        console.log("delete service:", deleteService)
        res.send({ success: true, deleteService})
    } catch (error) {
        console.log("Error deleting service:", error.message)
        res.send({success: false, error})
    }

}

export const handleEditSerice = async (req, res) => {
    const id = req.query.id
    console.log("Service provider to edit:", id)
    console.log("User:", req.user)
    try{
        if (!req.user) {
            return res.send({ success: false, error: "Unauthorized" })
          }
          if (!id) {
            return res.send({ success: false, error: "Service ID is not provided" })
          }

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

        if (
            !category ||
            !subject ||
            !location ||
            !rate ||
            !experience||
            !qulifications ||
            !telephone ||
            !description || description.trim() === ""
            ) {
                return res.send({ success: false, error: "All fields must be filled" });
              }

        const editedServicePost = await Serviceprovider.findByIdAndUpdate(
            id,
            {
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
                },
                { new: true }
        )
        console.log("Edit service provider:", editedServicePost)
        res.send({success: true, editedServicePost})
    } catch (error) {
        console.log("Error edit service provider:", error.message)
        res.send({success: false, error})
    }

}

export const handleListOneServiceProvider = async (req, res) => {
    

    try{
        const id = req.params.id
        if (!id) return res.send({ success: false, error: "Service provider id is not provided" })
        const selectedServiceProviderAd = await Serviceprovider.findById (id)
        console.log("List service provider ad:", selectedServiceProviderAd)
        res.send({success: true, selectedServiceProviderAd})
    } catch (error) {
        console.log("Error List service provider ad:", error.message)
        res.send({success: false, error})
    }

}