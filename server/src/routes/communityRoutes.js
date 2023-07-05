import express from 'express'
import {handleAddPostToCommunity,
        handleListPostFromCommunity} from '../controllers/communityControllers.js'
import upload from "../config/cloudinary.js"


const router = express.Router()

router.post('/addnewpost', upload.single("image"), handleAddPostToCommunity)
router.get('/listpost',  handleListPostFromCommunity)

export default router