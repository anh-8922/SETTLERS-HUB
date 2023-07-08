import House from "../model/Housing.js"

export const handleAddNewProperty = async (req, res) => {
    try{
        let {  address,
               image,  
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

        image = req.files
        
        if (!owner) {
            res.send({success: false, error: "Resister your self"})
            return
        }

        if (!address ||
            // image,  
            !rate ||
            !beds ||
            !baths ||
            !category||
            // !owner||
            !longitude ||
            !latitude ||
            !description ||
            !availableOn ||
            !houseType) {
            res.send({success: false, error: "All fields must fill"})
            return
        }

        const newPropertyPost = await (await House.create( {
               address,
               image,  
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
    try{res.send("hello list new property")

    } catch (error) {
        console.log("Error in list new property:", error)
    }
}