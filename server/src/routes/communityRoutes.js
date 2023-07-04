import express from 'express'
import {handleAddPostToCommunity} from '../controllers/communityControllers.js'
import upload from "../config/cloudinary.js"


const router = express.Router()

router.post('/addnewpost', upload.single("image"), handleAddPostToCommunity)

export default router