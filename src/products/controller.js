const pool = require('../../db');
const queries = require('./queries');

const getProducts = (req, res) =>{
    pool.query(queries.getProducts, (error, results)=> {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    pool.query(queries.getProductById, [id], (error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addProduct = (req,res) =>{
    const { product_no , name, price } = req.body;
    //verificar alguma restrição, caso exista
    pool.query(queries.addProduct, [product_no , name, price], (error, results)=>{
        if(error) throw error;
        res.status(201).send("Product inserted in database");
    })
}

const updateProductById=(req,res) =>{
    //const id = parseInt(req.params.id);
    const { product_no , name, price } = req.body;
    pool.query(queries.getProductById, [product_no], (error, results) => {
        const noProductFound = !results.rows.length;
        if(noProductFound){
            res.send("Product does not exist in the database!")
        }
        else{
            pool.query(queries.updateProductById, [product_no, price], (error, results)=>{
                if(error) throw error;
                res.status(200).send("Product updated in database");
            })
        }
    })
}
    

const deleteProductById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (error, results) => {
        const noProductFound = !results.rows.length;
        if(noProductFound){
            res.send("Product does not exist in the database!")
        }
        else{
            pool.query(queries.deleteProductById, [id], (error, results)=>{
                if(error) throw error;
                res.status(200).send("Product deleted from database");
            })
        }
    })
}





module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById,
};