import userModel from '../models/user-model.js'

// Controllers são a camada intermediária entre o endpoint e a base de dados
class UsersController {

    // static é utilizado quando queremos usar o método sem instanciar a classe

    static async createUser(req, res) {
        try {
            const newUser = await userModel.create(req.body);
            res.status(201).json({ message: `Usuário ${newUser.name} cadastrado com sucesso`, user: newUser });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha no cadastro de usuário` });
        }
    };

};

export default UsersController;