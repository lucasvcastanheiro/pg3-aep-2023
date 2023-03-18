import { Router } from 'express'
import userController from '../controller/userController'

const router = Router()

router.get('/', userController.findUsers)
router.post('/', userController.createUser)

export default router
