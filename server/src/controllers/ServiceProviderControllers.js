import Serviceproviderr from "../model/ServiceProvider.js";

export const handleAddNewServiceProvider = async (res, req) => {
    console.log("add service/:", req.body)
    console.log("req user add service:", req.user)

    try{
        if (!req.user)return res.send({ success: false, error: "Unauthorized" })
        console.log("Add new service provider")
        res.send("Add new service provider sucess")
    } catch (error) {
        console.log("Error in adding service provider")
    }
}

export const handleListServiceProviders = (req, res) => {

    try{
        console.log("List service providers")
        res.send("List service providers")
    } catch (error) {
        console.log("Error in list service providers")
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