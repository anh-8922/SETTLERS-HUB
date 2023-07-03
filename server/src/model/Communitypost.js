import mongoose from 'mongoose'

const {Schema} = mongoose
const communityPostSchema = new Schema ( {
    text: {
        type: String,
        required: true,
      },
      image: String,
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User", 
      },
      likes: [],
      date: {
          type: Date,
          default: Date.now
      },
      comments: [
        {
          comment: {
            type: String,
            required: true,
          },
          owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        },
      ],

})

export default mongoose.model("Communitypost", communityPostSchema)