import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddMessage,
        // handleDeleteReply,
        // handleEditReply,
    } from '../controllers/messageControllers.js'
// import upload from "../config/cloudinary.js"


const router = express.Router()

router.put('/addnewrmessage', auth, handleAddMessage)
// router.delete('/delete/:id', auth, handleDeleteReply)
// router.put('/edit/:id', auth, handleEditReply)

export default router