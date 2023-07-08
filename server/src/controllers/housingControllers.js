import House from "../model/Housing.js"
import cloudinary from "cloudinary"

export const handleAddNewProperty = async (req, res) => {
    try{
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
               feature
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