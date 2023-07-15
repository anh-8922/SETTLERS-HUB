import User from '../model/User.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const handleUserRegister = async (req, res) => {
    try {
      const { firstName, lastName, username, email, password} = req.body;
      
      if(!firstName ||  !lastName || !username || !email || !password){
        return res.send({ success: false, error:"All filed must be filled" })
      }
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  
      if (existingUser) {
        return res.send({success: false, error: "Username or email already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      res.send({success: true, message: "User registered successfully" });
    } catch (error) {
      console.log("Error in user register: " + error.message);
      res.sens({success: false, error: "Internal server error" });
    }
  };




  export const handleUserLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log("password:", password)
      if (!username || !password) return res.send({ success: false, error:"Both filed must be filled" });
  
      const user = await User.findOne({ username });
      console.log('user:', user)
  
      if (!user) {
        return res.send({ success: false,message: "Username or password is incorrect" });
      }
      // console.log("user.pass:", user.password)
      const isPasswordValid = await bcrypt.compare(password, user.password);
     
  
      if (!isPasswordValid) {
        return res.send({ success: false, message: "Username or password is incorrect" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
      // res.json({token, userID: user._id });
      res.send({success: true, token, userID: user._id })
      console.log('User login successful');
    } catch (error) {
      console.log("Error in user login:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };



  export const handleUpdateProfile = async (req, res) => {
    
  
    try {
    
      console.log("User Image Uploaded")
      res.send("User Image Uploaded");
    } catch (error) {
      console.log("error handleUpdateProfile:", error.message);
  
      res.send("Error in handleUpdateProfile" + error.message);
    }
  };


  export const handleListUsers = async (req, res) => {
    try{
      const users = await User.find()
      .select("-password -__v")
      res.send({ success: true, users });
      console.log(users)

    } catch (error) {
      console.log("Error listing users:", error.message)
      res.send({ success: false, error: error.message })
    }
  }

  export const handleListOneUsers = async (req, res) => {
    const id = req.params.id
    console.log('selected user id:', id)

    
    try{
      const id = req.params.id
      console.log('selected user id:', id)
      if (!id) return res.send({ success: false, error: "No id provided" });
      const selectedUser = await User.findById(id)
      .select("-password -__v")
      res.send({ success: true, selectedUser });
      console.log(selectedUser)

    } catch (error) {
      console.log("Error listing selected user:", error.message)
      res.send({ success: false, error: error.message })
    }

  }
  