const pool = require('../js/db');
const queries = require('./queries');

const getReq = (req, res) =>{
    pool.query(queries.getReq, (error, results)=> {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getReq,
};