import prodsRouter from "./prodsRouter.routes.js"
import cartsRouter from "./cartsRouter.routes.js"
import loginRouter from "./loginRouter.routes.js"
import chatRouter from "./dbChat.routes.js"
import testRouter from "./testRouter.routes.js"

const indexRouter = app => {
    
  app.use('/api/products', prodsRouter)
  app.use('/api/carts', cartsRouter)
  app.use('/api/sessions', loginRouter)
  app.use('/api/chat', chatRouter)
  app.use('/api/test', testRouter)
  }

export default indexRouter