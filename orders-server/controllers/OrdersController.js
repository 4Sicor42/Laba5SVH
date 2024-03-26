const { Product } = require('../models/models');

class OrdersController {
  async getOrders(req, res) {
    try {
      const Orders = await Product.findAll();
      res.json(Orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createOrder(req, res) {
    try {
      const { name, description, price, quantity, image } = req.body;
      const newProduct = await Product.create({
        name,
        description,
        price,
        quantity,
        image
      });
      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new OrdersController();