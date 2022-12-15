const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getFunc);
router.get('/:name', controller.getFuncbyName);
router.post("/", controller.addFunc);
router.put(":/funcionario_cpf",controller.atualizarFunc);
router.delete("/:funcionario_cpf", controller.excluiFunc)
// router.get("/", controller.getProducts);
// router.post("/", controller.addProduct);                //Create
// router.get("/:id", controller.getProductById);          //Read
// router.put("/", controller.updateProductById);          //Update
// router.delete("/:id", controller.deleteProductById);    //Delete

module.exports = router;