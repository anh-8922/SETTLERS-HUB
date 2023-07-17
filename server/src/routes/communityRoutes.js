import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddPostToCommunity,
        handleListPostFromCommunity} from '../controllers/communityControllers.js'
import upload from "../config/cloudinary.js"


const router = express.Router()

router.post('/addnewpost', auth, upload.single("image"), handleAddPostToCommunity)
router.get('/listpost',  handleListPostFromCommunity)

export default router