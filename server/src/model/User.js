import mongoose from 'mongoose'

const {Schema} = mongoose

const userSchema = new Schema ({
      firstName: {
        type: String,
        required: [true, "Required"]
      },
      lastName: {
        type: String,
        required: [true, "Required" ]
      },
      username: {
        type: String,
        required: [true, "Please provide a user name"],
        unique: true,
      },
      email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please provid a valid email"
        ]
      },
      password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        // select:false
      },
      resetPasswordToken: String,
      resetPasswordExpire: Date,
      image: String,

      address: [{
        addressline1:{
          type: String,
        },
        addressline2:{
          type: String,
        },
        city:{
          type: String,
        },
        postcode:{
          type: String,
        }
        
      }],
      gender:String,
      telephone:String,
      about: String,

    })



export default mongoose.model("User", userSchema)