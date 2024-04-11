import {faker} from '@faker-js/faker'

const mockProduct = () => {
    const title = faker.commerce.productName()
    const code = faker.string.uuid()
    const description = faker.commerce.productDescription()
    const price = faker.commerce.price()
    const thumbnail = faker.image.avatar()
    const stock = faker.number.int({min: 10}, {max: 99})
    const status = true
    const category = faker.commerce.department()
    return {
     title, code, description, price, thumbnail, stock,status, category
    }
}

const mockProducts = (qProds) => {
    const products = []
    for (let i = 0; i < qProds; i++) {
      products.push(mockProduct())
    }

    return products
}

export default mockProducts