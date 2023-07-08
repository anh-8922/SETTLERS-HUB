import mongoose from "mongoose";

const {Schema} = mongoose

const housingSchema = new Schema ({
    address: [{
        addressline1:{
            type: String,
            required:true
        },
        addressline2:{
            type: String,
            required:true
        },
        city:{
            type: String,
            required:true
        },
        postcode:{
            type: String,
            required:true
        }
    }],
    rate:{
        type: String,
        required:true
    },
    beds:{
        type: String,
        required:true 
    },
    baths:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image:[{ 
        type: String,
        required:true
     }],
    longitude: {
        type: String,
        required:true    
    },
    latitude: {
        type: String,
        required:true 
    },
    description: {
        type: String,
        required:true
    }, 
    availableOn: {
        type: String,
        required:true
    },
    houseType:{
        type: String,
        required:true
    },
    feature:{
        type:String,
        default: false,
    }
})

export default mongoose.model ("House", housingSchema)
