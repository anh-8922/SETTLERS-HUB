import mongoose from "mongoose";

const {Schema} = mongoose 

const serviceRequestSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      category:{
        type: String,
        required: true,
      },
      telephone:{
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      location:{
        type: String,
        required: true,
      },
      featured:{
        type:String,
        default: false,
      },
      message: [
        {
          owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
          text: {
            type: String,
            required: true,
          },
        },
      ],
    },
    {
      timestamps: true,
})

export default mongoose.model("Servicerequest", serviceRequestSchema)