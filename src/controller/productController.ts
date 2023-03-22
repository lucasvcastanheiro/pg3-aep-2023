import { NextFunction, Request, Response } from 'express'
import productService from '../service/productService'

class ProductController {
    public async createProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
    
            await productService.createProducts(data)
            
            res.status(201).send()
        } catch (error) {
            next(error)
        }
    }

    public async getProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await productService.getProducts()
            
            res.json(products)
        } catch (error) {
            next(error)            
        }
    }

    public async getStock(req: Request, res: Response, next: NextFunction) {
        try {
            const stock = await productService.getStock()

            res.json(stock)
        } catch (error) {
            next(error)
        }
    }

    public async getTotalStockValue(req: Request, res: Response, next: NextFunction) {
        try {
            const totalStockValue = await productService.getTotalStockValue()

            res.json({
                totalStockValue
            })
        } catch (error) {
            next(error)
        }
    }
}

export default new ProductController()
