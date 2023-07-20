import mongoose from 'mongoose'

const {Schema} = mongoose
const serviceProviderSchema = new Schema ( {
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category:{
    type: String,
    required: true,
  },
  rate:{
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
  qulifications: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  experiance: {
    type: String,
    required: true,
  },
  image: String,
  featured:{
    type:String,
    default: false,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
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


export default mongoose.model("Serviceprovider", serviceProviderSchema)