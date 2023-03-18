import fs from 'fs/promises'

class ProductService {
    public async createProducts(data: Object) {       
        await fs.writeFile('products.json', JSON.stringify(data, null, 2))
    }

    public async getProducts() {
        let products = await fs.readFile('products.json', {encoding: 'utf-8'})
        
        products = JSON.parse(products)

        return products
    }
}

export default new ProductService()
