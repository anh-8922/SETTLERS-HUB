import express from 'express'
import {handleAddPostToCommunity} from '../controllers/communityControllers.js'

const router = express.Router()

router.post('/addpost', handleAddPostToCommunity)

export default router