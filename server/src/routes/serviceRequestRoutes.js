import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddNewServiceRequset,
        handleListServiceRequset,
        handleListRequestAdsByUSer,
        handeleDeleteRequest,
        handleEditRequest,
        handleListOneServiceRequset} from '../controllers/ServiceRequestControllers.js'



const router = express.Router()

router.post('/addnewservicerequset', auth,  handleAddNewServiceRequset)
router.get ('/listservicerequset', handleListServiceRequset)
router.get ('/listoneservicerequset/:id', handleListOneServiceRequset)
router.get ('/listrequestadsbyuser', auth, handleListRequestAdsByUSer)
router.delete('/delete/:id', auth, handeleDeleteRequest)
router.put('/edit/:id',  auth, handleEditRequest)

export default router