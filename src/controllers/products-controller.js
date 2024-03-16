import { productModel } from '../models/product-model.js'

// Controllers são a camada intermediária entre o endpoint e a base de dados
class ProductController {

    // static é utilizado quando queremos usar o método sem instanciar a classe

    static async listProducts(req, res) {
        try {
            const products = await productModel.find();
            res.status(200).json({ data: products });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na listagem de produtos` });
        }
    };

};

export default ProductController;