const getProducts = "SELECT * FROM company.products_new";
const getProductById = "SELECT * FROM company.products_new WHERE product_no = $1";
const addProduct = "INSERT INTO company.products_new (product_no, name, price) VALUES ($1, $2, $3)"
const updateProductById = "UPDATE company.products_new SET price = $2 WHERE product_no = $1"
const deleteProductById = "DELETE FROM company.products_new WHERE product_no = $1"

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById,
}