const productRouter = require('express').Router();
const { productsController } = require('../controllers');

// productRouter.delete('/:id', productsController.delete);
productRouter.get('/:id', productsController.findById);
productRouter.get('/', productsController.findAll);
productRouter.post('/', productsController.create);

module.exports = productRouter;
