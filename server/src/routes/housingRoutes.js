import express from 'express'
import {handleAddNewProperty,
        handleListProperties,
        handleListProperiesByUSer,
        handeleDeleteProperty,
        handleEditProperties,
        handleListOnePropery} from '../controllers/housingControllers.js'
import auth from '../middleware/auth.js'
import upload from "../config/cloudinary.js"


const router = express.Router()

router.post('/addnewproperty', auth, upload.array('images', 5), handleAddNewProperty)
router.get ('/listproperties', handleListProperties)
router.get ('/listoneproperty/:id', handleListOnePropery)
router.get ('/listpropertiesbyuser', auth, handleListProperiesByUSer)
router.delete('/delete/:id', auth, handeleDeleteProperty)
router.put('/edit', auth, upload.array('images', 5), handleEditProperties)

export default router