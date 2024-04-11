import { Router } from "express";
import mockProducts from "../../test/mockProducts/mockProducts.test.js";
import logger from "../utils/middlewares/logs/logger.middleware.js";
const testRouter = Router();


testRouter.get('/mockingproducts',  async (req, res) => {
    const products = mockProducts(100)
    res.render('mockingProducts', {
        products,
        title: "Listado de productos"
    })
})

testRouter.get('/mockingproducts/:qProds',  async (req, res) => {
    const qProds = parseInt(req.params.qProds)
    const products = mockProducts(qProds)
    res.render('mockingProducts', {
        products,
        title: "Listado de productos"
    })
})

testRouter.get('/loggerTest',  async (req, res) => {
    try {
        req.logger.debug('Este es un log de Debug')
        req.logger.http('Este es un log de level HTTP')
        req.logger.info('Inicia el servicio')
        req.logger.warning('Cuidado vamos para un error')
        throw new Error('Un error!!!')
      } catch (error) {
        req.logger.error(error.message)
        req.logger.fatal(`Fatal error! ${error.message}`)
        res.json({ message: error })
      }
})

export default testRouter;