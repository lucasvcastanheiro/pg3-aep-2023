import { Router } from 'express'
import healthCheckController from '../controller/healthCheckController'
import users from './users'
import products from './products'

const router = Router()

router.get('/', (req, res, next) => {
    res.send('Server is running...')
})

router.get('/health-check', healthCheckController.check)

router.use('/user', users)
router.use('/products', products)

export default router
