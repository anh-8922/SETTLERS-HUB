import express from 'express'
import {handleAddNewProperty,
        handleListProperties} from '../controllers/housingControllers.js'
import upload from "../config/cloudinary.js"


const router = express.Router()

router.post('/addnewproperty', upload.array('images', 5), handleAddNewProperty)
router.get ('/listproperties', handleListProperties)

export default router