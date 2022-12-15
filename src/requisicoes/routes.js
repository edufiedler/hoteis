const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getReq);
router.get('/func/:name', controller.getReqbyFunc);
router.get('/req/:requisicao_id', controller.getFuncbyReq);
router.get('/:requisicao_id', controller.getReqbyId);
router.post("/", controller.addReq);
router.put("/:funcionario_cpf",controller.atualizarReq);
router.delete("/:funcionario_cpf", controller.excluiReq);
router.post("/func/:requisicao_id", controller.addFuncinReq);


module.exports = router;