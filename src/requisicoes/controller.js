const pool = require('../js/db');
const queries = require('./queries');

const getReq = (req, res) =>{
    pool.query(queries.getReq, (error, results)=> {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getReqbyFunc = (req,res) => {
    const cpf = req.params.funcionario_cpf;
    pool.query(queries.getReqbyFunc,[cpf],(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getFuncbyReq = (req,res) => {
    const id_req = req.params.requisicao_id;
    pool.query(queries.getFuncbyReq,[id_req],(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const addReq = (req, res) => {
    const { requisicao_id, dataabertura, datafechamento, status, textolivre, funcionario_cpf } = req.body;

    pool.query(queries.verificaReq, [requisicao_id], (error, results) => {
         if (results.rows.length) {
             res.send("Id de requisição já existente, não foi possível criar.")
         }
        pool.query(queries.addReq, [requisicao_id, dataabertura, datafechamento, status, textolivre, funcionario_cpf], (error, results) => {
            if (error) throw error;
            res.status(201).send("Requisição adicionada");
        })
    })

}

const excluirRequi = (req, res) => {
    const requisicao_id = req.params.requisicao_id;
    pool.query(queries.verificaReq, [requisicao_id], (error, results) => {
        const semRequi = !results.rows.length;
        if (semRequi) res.send("Requisição não existe, não deletada");
        pool.query(queries.excluirReq, [requisicao_id], (error, results) =>{
            if(error) throw error;
            res.status(200).send("Requisição deletado com sucesso");
        })
    })
}

const atualizarRequi = (req, res) => {
    const { requisicao_id, dataabertura, datafechamento, status, textolivre, funcionario_cpf } = req.body;
    pool.query(queries.verificaReq, [requisicao_id], (error, results) => {
         const semFunc = !results.rows.length;
         if (semFunc) res.send("Requisição não existe");
        pool.query(queries.atualizarReq, [dataabertura, datafechamento, status, textolivre, funcionario_cpf, requisicao_id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Requisição atualizada");
        })
    })
}


module.exports = {
    getReq,
    addReq,
    getReqbyFunc,
    getFuncbyReq,
    atualizarRequi,
    excluirRequi
};