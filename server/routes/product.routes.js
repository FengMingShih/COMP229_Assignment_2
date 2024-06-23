import express from 'express';
import productCtrl from '../controllers/product.controller.js';

const router = express.Router();

router.route('/api/products')
  .get((req, res, next) => {
    if (req.query.name) {
      productCtrl.findProductsByName(req, res);
    } else {
      productCtrl.getAllProducts(req, res);
    }
  })
  .post(productCtrl.createProduct)
  .delete(productCtrl.deleteAllProducts);

router.route('/api/products/:productId')
  .get(productCtrl.getProductById)
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);

router.param('productId', productCtrl.productByID);

export default router;
