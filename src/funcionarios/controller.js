const pool = require('../js/db');
const queries = require('./queries');


const getFunc = (req,res) => {
    pool.query(queries.getFunc,(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getFuncbyName = (req,res) => {
    const name = req.params.name;
    pool.query(queries.getFuncbyName,[name],(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addFunc = (req, res) => {
    const { funcionario_cpf, nom_pnome, nom_snome, sexo, datanasc, endereco, salario, tipodecontrato } = req.body;

    pool.query(queries.verificaCPF, [funcionario_cpf], (error, results) => {
         if (results.rows.length) {
             res.send("CPF de funcionário já cadastrado")
         }
        pool.query(queries.addFunc, [funcionario_cpf, nom_pnome, nom_snome, sexo, datanasc, endereco, salario, tipodecontrato], (error, results) => {
            if (error) throw error;
            res.status(201).send("FUncionário adicionado");
        })
    })

}

const excluiFunc = (req, res) => {
    const funcionario_cpf = parseInt(req.params.id);
    pool.query(queries.verificaCPF, [funcionario_cpf], (error, results) => {
        const semFunc = !results.rows.length;
        if (semFunc) res.send("Funcionário não existe, não deletado");
        pool.query(queries.excluiFunc, [funcionario_cpf], (error, results) =>{
            if(error) throw error;
            res.status(200).send("Funcionário deletado com sucesso");
        })
    })
}

const atualizarFunc = (req, res) => {
    const funcionario_cpf = parseInt(req.params.funcionario_cpf);
    const { nom_pnome } = req.body.nom_pnome;
    const { nom_snome } = req.body.nom_snome;
    const { sexo } = req.body.sexo;
    const { datanasc } = req.body.datanasc;
    const { endereco } = req.body.endereco;
    const { salario } = req.body.salario;
    const { tipodecontrato } = req.body.salario;
    pool.query(queries.verificaCPF, [funcionario_cpf], (error, results) => {
        const semFunc = !results.rows.length;
        if (semFunc) res.send("Funcionário não existe");
        pool.query(queries.atualizarFunc, [nom_pnome, nom_snome, sexo, datanasc, endereco, salario, tipodecontrato, funcionario_cpf ], (error, results) => {
            // name = $1, funcionario_cpf = $2
            if(error) throw error;
            res.status(200).send("Funcionário atualizado");
        })
    })
}

module.exports = {
    getFunc,
    getFuncbyName,
    addFunc,
    excluiFunc,
    atualizarFunc,
};