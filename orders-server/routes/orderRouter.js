const Router = require('express')
const router = new Router()
const OrdersController = require('../controllers/OrdersController')

router.get('/', OrdersController.getOrders)
router.post('/add', OrdersController.createOrder)
  
module.exports = router