import mongoose from 'mongoose'

const {Schema} = mongoose
const communityPostSchema = new Schema ( {
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  text: {
    type: String,
    required: true,
  },
  image: String,
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
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


export default mongoose.model("Communitypost", communityPostSchema)