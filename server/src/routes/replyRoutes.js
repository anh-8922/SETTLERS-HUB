import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddReply,
        // handleDeleteReply,
        // handleEditReply,
    } from '../controllers/replyControllers.js'
// import upload from "../config/cloudinary.js"


const router = express.Router()

router.put('/addnewreply', auth, handleAddReply)
// router.delete('/delete/:id', auth, handleDeleteReply)
// router.put('/edit/:id', auth, handleEditReply)

export default router