import User from '../model/User.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const handleUserRegister = async (req, res) => {
    try {
      const { firstName, lastName, username, email, password} = req.body;
  
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  
      if (existingUser) {
        return res.status(400).json({ error: "Username or email already exists" });
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
  
      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.log("Error in user register: " + error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };




  export const handleUserLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
      // console.log("password:", password)
      if (!username || !password) return res.send({ success: false, errorId: 1 });
  
      const user = await User.findOne({ username });
      // console.log('user:', user)
  
      if (!user) {
        return res.send({ message: "Username or password is incorrect" });
      }
      // console.log("user.pass:", user.password)
      const isPasswordValid = await bcrypt.compare(password, user.password);
     
  
      if (!isPasswordValid) {
        return res.send({ message: "Username or password is incorrect" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
      res.json({ token, userID: user._id });
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
  