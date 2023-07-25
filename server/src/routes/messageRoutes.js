import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddMessage,
        handleAddNewServiceMessage,
        handleAddNewServiceReview,
        // handleDeleteReply,
        // handleEditReply,
    } from '../controllers/messageControllers.js'
// import upload from "../config/cloudinary.js"


const router = express.Router()

router.put('/addnewrmessage', auth, handleAddMessage)
// router.delete('/delete/:id', auth, handleDeleteReply)
// router.put('/edit/:id', auth, handleEditReply)
router.put('/addnewservicemessage', auth, handleAddNewServiceMessage)
router.put("/addnewservicereview", auth, handleAddNewServiceReview)

export default router