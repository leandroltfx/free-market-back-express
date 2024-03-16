import mongoose from "mongoose";

// A criação do Schema na API cria também a collection na database se ainda não existir.

// Schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const productsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nameProduct: { type: String, required: true },
    descriptionProduct: { type: String },
    priceProduct: { type: Number },
}, { versionKey: false });

// O primeiro parâmetro se refere a collection definida (ou a ser criada) no MongoDB Atlas
// Models são objetos que representa uma coleção na base de dados e são eles que fazem a manipulação no banco de dados na controller
const productModel = mongoose.model("products", productsSchema);

export default productModel;