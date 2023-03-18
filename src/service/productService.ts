import fs from 'fs/promises'

class ProductService {
    public async createProducts(data: Object) {       
        await fs.writeFile('products.json', JSON.stringify(data, null, 2))
    }
}

export default new ProductService()
