import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddReply,
        // handleListPostFromCommunity,
        // handleLikePost,
        // handleDeleteCommunityPost,
        // handleEditCommunityPost
    } from '../controllers/replyControllers.js'
// import upload from "../config/cloudinary.js"


const router = express.Router()

router.put('/addnewreply', auth, handleAddReply)
// router.put('/like', auth, handleLikePost)
// router.get('/listpost',  handleListPostFromCommunity)
// router.delete('/delete/:id', auth, handleDeleteCommunityPost)
// router.put('/edit/:id', auth, handleEditCommunityPost)

export default router