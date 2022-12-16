const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getReq);
router.get('/func/:funcionario_cpf', controller.getReqbyFunc); // pega o cpf do func
router.get('/req/:requisicao_id', controller.getFuncbyReq); // pega a requisiçao do ID
router.post("/", controller.addReq);
router.put("/:requisicao_id",controller.atualizarRequi);
router.delete("/:requisicao_id", controller.excluiRequi);


module.exports = router;