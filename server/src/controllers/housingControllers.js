import House from "../model/Housing.js"

export const handleAddNewProperty = async (req, res) => {
    try{
        const {address,
               image,  
               rate, 
               beds, 
               bath, 
               type, 
               owner, 
               longitude, 
               latitude,
               description,
               availableon,
               houseType} = req.body
        res.send("hello new property")
        image = req.file.filename

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