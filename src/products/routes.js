const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getProducts);
router.post("/", controller.addProduct);                //Create
router.get("/:id", controller.getProductById);          //Read
router.put("/", controller.updateProductById);          //Update
router.delete("/:id", controller.deleteProductById);    //Delete

module.exports = router;