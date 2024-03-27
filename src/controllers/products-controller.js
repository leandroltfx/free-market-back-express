import productModel from '../models/product-model.js'
import userModel from '../models/user-model.js';

// Controllers são a camada intermediária entre o endpoint e a base de dados
class ProductController {

    // static é utilizado quando queremos usar o método sem instanciar a classe

    static async listProducts(req, res) {
        try {
            const products = await productModel.find().populate({ path: 'user', select: ['name', 'email'] }).exec();
            res.status(200).json({ data: products });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na listagem de produtos` });
        }
    };

    static async createProduct(req, res) {
        try {
            const user = await userModel.findById(req.params.userId);
            if (user) {
                const newProduct = { ...req.body, user: req.params.userId };
                const productCreate = await productModel.create(newProduct);
                res.status(201).json({ message: `Produto ${productCreate.name} cadastrado com sucesso!`, data: productCreate });
            } else {
                res.status(404).json({ message: `Usuário inválido.` });
            }
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha no cadastro do produto` });
        }
    }

};

export default ProductController;