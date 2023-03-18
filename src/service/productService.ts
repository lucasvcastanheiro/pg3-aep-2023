import fs from 'fs/promises'

class ProductService {
    public async createProducts(data: Object) {       
        await fs.writeFile('products.json', JSON.stringify(data, null, 2))
    }

    public async getProducts() {
        let fileData = await fs.readFile('products.json', {encoding: 'utf-8'})
        
        const products = JSON.parse(fileData)

        return products
    }

    public async getStock() {
        const products = await this.getProducts()

        const stock = products.map((product: any) => {
            return {
                name: product.nome,
                amount: product.qtde,
                price: product.preco,
                stockValue: product.qtde * product.preco
            }
        })
        
        return stock
    }
}

export default new ProductService()
