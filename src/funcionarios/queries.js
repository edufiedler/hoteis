const getFunc = "SELECT * FROM public.funcionario";
const getFuncbyName = "SELECT * FROM public.funcionario WHERE nom_pnome = $1";

const verificaCPF = "SELECT * FROM public.funcionario WHERE funcionario_cpf = $1";
const addFunc = "INSERT INTO public.funcionario(funcionario_cpf, nom_pnome, nom_snome, sexo, datanasc, endereco, salario, tipodecontrato) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const excluiFunc = "DELETE CASCADE FROM public.funcionario WHERE funcionario_cpf = $1";
const atualizarFunc = "UPDATE public.funcionario SET nom_pnome = $1, nom_snome = $2, sexo = $3, datanasc = $4, endereco = $5, salario = $6, tipodecontrato = $7 WHERE funcionario_cpf = $8";

module.exports = {
    getFunc,
    getFuncbyName,
    verificaCPF,
    addFunc,
    excluiFunc,
    atualizarFunc,
}