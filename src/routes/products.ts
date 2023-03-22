import { Router } from 'express'
import productController from '../controller/productController'

const router = Router()

router.post('/', productController.createProducts)
router.get('/', productController.getProducts)
router.get('/stock', productController.getStock)
router.get('/stock/totalValue', productController.getTotalStockValue)

export default router