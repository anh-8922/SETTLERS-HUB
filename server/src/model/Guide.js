import mongoose from "mongoose";

const {Schema} = mongoose

const guideSchema = new Schema({
    title:{
        type: String,
        required:true
    }, 
    subtitle:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    abstract: [
        {
            type: String,
            required:true
        }
    ],
    paragraph: 
        {
            type: String,
            required:true
        }
    ,
    image: {
        type: String,
        required:true}
})

export default mongoose.model('Guide', guideSchema)