import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddPostToCommunity,
        handleListPostFromCommunity,
        handleLikePost,
        handleDeleteCommunityPost} from '../controllers/communityControllers.js'
import upload from "../config/cloudinary.js"


const router = express.Router()

router.post('/addnewpost', auth, upload.single("image"), handleAddPostToCommunity)
router.post('/like', auth, handleLikePost)
router.get('/listpost',  handleListPostFromCommunity)
router.delete('/delete/:id', auth, handleDeleteCommunityPost)

export default router