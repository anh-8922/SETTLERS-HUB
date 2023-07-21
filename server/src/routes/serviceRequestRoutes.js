import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddNewServiceRequset,
        handleListServiceRequset,
        handleListRequestAdsByUSer,
        handeleDeleteRequest,
        handleEditRequest,
        handleListOneServiceRequset} from '../controllers/ServiceRequestControllers.js'



const router = express.Router()

router.post('/addnewservicerequset',  handleAddNewServiceRequset)
router.get ('/listservicerequset', handleListServiceRequset)
router.get ('/listoneservicerequset/:id', handleListOneServiceRequset)
router.get ('/listrequestadsbyuser',  handleListRequestAdsByUSer)
router.delete('/delete/:id', handeleDeleteRequest)
router.put('/edit/:id',  handleEditRequest)

export default router