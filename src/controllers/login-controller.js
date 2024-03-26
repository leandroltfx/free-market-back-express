import userModel from '../models/user-model.js';

class LoginController {

    static async login(req, res) {
        try {
            const loggedUser = await userModel.findOne(
                {
                    $and: [
                        { email: req.body.email, password: req.body.password }
                    ]
                }
            );
            if (loggedUser) {
                return res.status(200).json({ message: 'Login efetuado com sucesso!', data: loggedUser });
            }
            return res.status(401).send({ message: 'Email e/ou senha inválidos.' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - ocorreu um erro no sistema.` });
        }
    };

};

export default LoginController;