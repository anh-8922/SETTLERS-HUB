import express from 'express'

import {handleUserRegister,
        handleUserLogin,
        handleListUsers,
        handleListOneUsers,
        handleUpdateProfile } from "../controllers/userControllers.js"

import auth from "../middleware/auth.js"

import upload from "../config/cloudinary.js"

const router = express.Router()

router.post('/register', handleUserRegister)
router.post('/login', handleUserLogin)
router.get('/userlist', handleListUsers)
router.get('/listoneuser/:id', handleListOneUsers)
router.put("/updateprofile", auth, upload.single("image"), handleUpdateProfile);



export default router