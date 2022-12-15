
const getReq = "SELECT * FROM public.requisicao";
const getReqbyFunc = "SELECT * FROM public.requisicao WHERE requisicao_id IN (SELECT requisicao_id FROM public.recebe_requisicao WHERE funcionario_cpf = $1 AND tipo = 'F')";
const getFuncbyReq = "SELECT * FROM public.funcionario where funcionario_cpf in (SELECT funcionario_cpf FROM public.recebe_requisicao WHERE requisicao_id = $1)";
const addFuncinReq = "INSERT INTO public.recebe_requisicao(funcionario_cpf, requisicao_id) VALUES ($1, $2)";
const getReqbyId = "SELECT * FROM public.requisicao WHERE requisicao_id = $1";
const addReq = "INSER INTO public.requisicao (requisicao_id, tipo, dataabertura, datafechamento, status, textolivre, funcionario_cpf, cliente_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const atualizarReq = "UPDATE public.requisicao SET tipo = $1, dataabertura = $2, datafechamento = $3, status = $4, textolivre = $5, funcionario_cpf = $6, cliente_id = $7 WHERE id_requisicao = $8";
const excluirReq = "DELETE FROM public.requisicao WHERE id_requisicao = $1";
const verificaReq = "SELECT * FROM public.requisicao WHERE id_requisicao = $1";


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