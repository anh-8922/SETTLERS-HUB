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
    subtitle1:{
        type: String,
        required:false
    },
    subtitle2:{
        type: String,
        required:false
    },
    subtitle1:{
        type: String,
        required:false
    },
    subtitle2:{
        type: String,
        required:false
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
    paragraph1: 
        {
            type: String,
            required:false
        }
    ,
    paragraph2: 
        {
            type: String,
            required:false
        }
    ,
    image: {
        type: String,
        required:true}
})

export default mongoose.model('Guide', guideSchema)