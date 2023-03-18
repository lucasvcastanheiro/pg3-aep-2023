import app from '../../src/app'
import request from 'supertest'

const mockObj = [
    { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" },
    { "nome": "Impressora", "qtde": 0, "preco": 649.50, "data_compra": "2023-03-17", "data_entrega": "2023-05-26" },
    { "nome": "Caderno", "qtde": 4, "preco": 27.10, "data_compra": "2023-03-10", "data_entrega": "2023-03-12" },
    { "nome": "Lapis", "qtde": 3, "preco": 5.8, "data_compra": "2023-03-02", "data_entrega": "2023-04-20" },
    { "nome": "Tesoura", "qtde": 1, "preco": 19.99, "data_compra": "2023-03-25", "data_entrega": "2023-04-13" }
]

describe('Products', () => {
    it('should write body request in a file called products.json', async () => {
        const {status} = await request(app)
            .post('/products')
            .send(mockObj)

        expect(status).toBe(201)
    })

    it('should get data from a file called products.json', async () => {
        const {status, body} = await request(app)
            .get('/products')
            .send()

        // expect(status).toBe(200)
        expect(body).toEqual(mockObj)
    })
})
