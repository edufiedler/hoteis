const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getFunc);
router.get('/:name', controller.getFuncbyName);
router.post("/", controller.addFunc);
router.put("/:funcionario_cpf",controller.atualizarFunc);
router.delete("/:funcionario_cpf", controller.excluiFunc);


module.exports = router;