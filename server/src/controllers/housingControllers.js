import House from "../model/Housing.js"
import cloudinary from "cloudinary"

export const handleAddNewProperty = async (req, res) => {
    try{
        if (!req.user) return res.send({ success: false, error: "Unauthorized" });
        let {  address,  
               rate, 
               beds, 
               baths, 
               category, 
               owner, 
               longitude, 
               latitude,
               description,
               availableOn,
               houseType,
               deposit,
               furnishedType,
               letType,
               councilTaxBand,
               feature} = req.body
               const images = req.files
               console.log("images backend:", images)
        
        if (!owner) {
            res.send({success: false, error: "Register your self to create advertiestments"})
            return
        }

        if (!address ||
            !images,  
            !rate ||
            !beds ||
            !baths ||
            !category||
            !longitude ||
            !latitude ||
            !description ||
            !availableOn ||
            !letType ||
            ! furnishedType ||
            !houseType) {
            res.send({success: false, error: "All fields must fill"})
            return
        }

        const uploadedImages = [];
        const uploadPromises = images.map((image) =>
          cloudinary.uploader.upload(image.path)
        );

        const uploadedResults = await Promise.all(uploadPromises);
        console.log("uploaded result:", uploadedResults)

        uploadedResults.forEach((result) => {
            uploadedImages.push(result.secure_url);
          })

       
        const newPropertyPost = await (await House.create( {
               address,
               image: uploadedImages,
               rate, 
               beds, 
               baths, 
               category, 
               owner, 
               longitude, 
               latitude,
               description,
               availableOn,
               houseType,
               feature,
               deposit,
               furnishedType,
               councilTaxBand,
               letType,
        })).populate({
            path: "owner",
            select: "username email image firstName lastName",
        })
           
        console.log("New property post added:", newPropertyPost)
        res.send({success: true, newPropertyPost })

    } catch (error) {
        console.log("Error in adding new property:", error)
    }
}


export const handleListProperties = async (req, res) => {
    console.log("handleListPropertyAds:", req.body)
    try{
        const propertyAds = await House.find()
        .populate({
            path: "owner",
            select: "username email image firstName lastName",
        })
        .select ("-__v")
        .sort({ _id: "desc" })
        console.log("Property Ads list:", propertyAds)
        res.send({success: true, propertyAds})

    } catch (error) {
        console.log("Error in list new property:", error.message)
        res.send(("Error in list new property:" + error.message))
    }
}

export const handleListOnePropery = async (req, res) => {
    try{
        const id = req.params.id

        if (!id) return res.send({ success: false, error: "Property id is not provided" });

        const selectedProperty = await House.findById(id)
        .populate({path: "owner", select:"username email firstName lastName"})
        .select("-__v")
        console.log("Selected property:" , selectedProperty)
        res.send({success: true, selectedProperty})
    } catch (error) {
        console.log('Error Selected property:', error.message)
        res.send('Error in Selected property' + error.message)
    }

}

export const handleListProperiesByUSer = async (req, res) => {
    try{
        const owner = req.query.owner
        console.log("owner:", owner)

        if (!owner) return res.send({ success: false, error: "User id is not provided" });

        if (!req.user) return res.send({ success: false, error: "Unauthorized" });

        const adverticedPropertyByUser = await House.find({owner: owner})
        .select("address category baths beds rate deposit availableOn letType")
        console.log("Advertised property:" , adverticedPropertyByUser)
        res.send({success: true, adverticedPropertyByUser})
    } catch (error) {
        console.log('Error Adverticed property:', error.message)
        res.send('Error in Adverticed property' + error.message)
    }

}

export const handeleDeleteProperty = async (req, res) => {
    console.log("Delete Property:", req.params)

    try{
        if (!req.user) return res.send({ success: false, error: "Unauthorized" });

        const deleteProperty = await House.findByIdAndDelete(req.params.id)
        console.log('Delete Property:', deleteProperty)
        res.send("Property deleted from the DB")
    } catch (error) {
        console.log('Error deleting Property:', error.message)
        res.send('Error in deleting Property:', error.message)
    }

}

export const handleEditProperties = async (req, res) => {
    const {_id} = req.params
    console.log("Property to edit:", _id)
    console.log("User:", req.user);
    try{
        if (!req.user) return res.send({ success: false, error: "Unauthorized" })
        let {address,  
            rate, 
            beds, 
            baths, 
            category, 
            owner,
            longitude, 
            latitude,
            description,
            availableOn,
            houseType,
            deposit,
            furnishedType,
            letType,
            councilTaxBand,
            feature} = req.query
            const images = req.files
            console.log("images backend:", images)
     
     if (!owner) {
         res.send({success: false, error: "Register your self to create advertiestments"})
         return
     }

     if (!address ||
         !images,  
         !rate ||
         !beds ||
         !baths ||
         !category||
         !longitude ||
         !latitude ||
         !description ||
         !availableOn ||
         !letType ||
         ! furnishedType ||
         !houseType) {
         res.send({success: false, error: "All fields must fill"})
         return
     }

     const uploadedImages = [];
     const uploadPromises = images.map((image) =>
       cloudinary.uploader.upload(image.path)
     );

     const uploadedResults = await Promise.all(uploadPromises);
     console.log("uploaded result:", uploadedResults)

     uploadedResults.forEach((result) => {
         uploadedImages.push(result.secure_url);
       })

    
     const editedPropertyPost = await (await House.findByIdAndUpdate( _id, {
            address,
            image: uploadedImages,
            rate, 
            beds, 
            baths, 
            category, 
            owner, 
            longitude, 
            latitude,
            description,
            availableOn,
            houseType,
            feature,
            deposit,
            furnishedType,
            councilTaxBand,
            letType,
     }))
        

        if (!id) return res.send({ success: false, error: "Property id is not provided" })
        console.log("property edited:" , editedPropertyPost)
        res.send("Property updated in the DB")

    } catch (error) {
        console.log("error in edit property:", error.message)
        res.send({success: false, error: error.message})
    }


}