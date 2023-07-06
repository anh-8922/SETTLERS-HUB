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
        required: true, 
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
          commentowner: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
          commentslikes:[],
          date: {
            type: Date,
            default: Date.now
        },
          reply:[
            {
              reply:{
                type: String,
                required: true
              },
              replyowner: {
                type: Schema.Types.ObjectId,
                required: true
              },
              replylikes: [],
              date: {
                type: Date,
                default: Date.now
            },
            }
          ]
        },
      
      ],

})


export default mongoose.model("Communitypost", communityPostSchema)