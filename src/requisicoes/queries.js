
const getReq = "SELECT * FROM public.requisicao";
const getReqbyFunc = "SELECT * FROM public.recebe_requisicao WHERE funcionario_cpf = $1";
const getFuncbyReq = "SELECT * FROM public.recebe_requisicao WHERE requisicao_id = $1";
const addFuncinReq = "INSERT INTO public.recebe_requisicao(funcionario_cpf, requisicao_id) VALUES ($1, $2)";
const getReqbyId = "SELECT * FROM public.requisicao WHERE requisicao_id = $1";
const addReq = "INSER INTO public.requisicao (requisicao_id, tipo, dataabertura, datafechamento, status, textolivre, funcionario_cpf, cliente_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const atualizarReq = "UPDATE public.requisicao SET tipo = $1, dataabertura = $2, datafechamento = $3, status = $4, textolivre = $5, funcionario_cpf = $6, cliente_id = $7 WHERE id_requisicao = $8";
const excluirReq = "DELETE FROM public.requisicao WHERE id_requisicao = $1";


module.exports = {
    getReq,
    getReqbyFunc,
    getFuncbyReq,
    addFuncinReq,
    getReqbyId,
    addReq,
    atualizarReq,
    excluirReq,
}