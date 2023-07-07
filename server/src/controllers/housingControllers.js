import House from "../model/Housing.js"

export const handleAddNewProperty = async (req, res) => {
    try{
        let {address,
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
            path: "address",
            select: "addressline1 addressline2 city postcode",
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