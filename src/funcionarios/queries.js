const getFunc = "SELECT * FROM public.funcionario";
const getFuncbyName = "SELECT * FROM public.funcionario WHERE nom_pnome = $1";

const verificaCPF = "SELECT * FROM public.funcionarios WHERE funcionario_cpf = $1";
const addFunc = "INSERT INTO public.funcionarios(funcionario_cpf, nom_pnome, nom_snome, sexo, datanasc, endereco, salario, tipodecontrato) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const excluiFunc = "DELETE FROM public.funcionarios WHERE funcionario_cpf = $1";
const atualizarFunc = "UPDATE public.funcionarios SET name = $1 WHERE id = $2";

module.exports = {
    getFunc,
    getFuncbyName,
    verificaCPF,
    addFunc,
    excluiFunc,
}