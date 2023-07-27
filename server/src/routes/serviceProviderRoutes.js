import express from 'express'
import auth from '../middleware/auth.js'
import {handleAddNewServiceProvider,
        handleListServiceProviders,
        handleListServiceAdsByUSer,
        handeleDeleteService,
        handleEditSerice,
        handleListOneServiceProvider} from '../controllers/ServiceProviderControllers.js'



const router = express.Router()

router.post('/addnewserviceprovider', auth, handleAddNewServiceProvider)
router.get ('/listserviceproviders', handleListServiceProviders)
router.get ('/listoneserviceprovider/:id', handleListOneServiceProvider)
router.get ('/listserviceadsbyuser', auth, handleListServiceAdsByUSer)
router.delete('/delete/:id', auth,  handeleDeleteService)
router.put('/edit/:id', auth, handleEditSerice)

export default router