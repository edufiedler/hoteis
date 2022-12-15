const getProducts = "SELECT * FROM public.funcionario";
const getProductById = "SELECT * FROM public.funcionario WHERE funcionario_cpf = $1";
const addProduct = "INSERT INTO public.funcionario (product_no, name, price) VALUES ($1, $2, $3)"
const updateProductById = "UPDATE public.funcionario SET price = $2 WHERE product_no = $1"
const deleteProductById = "DELETE FROM public.funcionario WHERE product_no = $1"

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById,
}