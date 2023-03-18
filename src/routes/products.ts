import { Router } from 'express'
import productController from '../controller/productController'

const router = Router()

router.post('/', productController.createProducts)
router.get('/', productController.getProducts)
router.get('/stock', productController.getStock)

export default router