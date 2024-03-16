// A função indexRoutes recebe a instância do Express que fará a configuração das rotas da API.
const indexRoutes = (app) => {
    app.route('/').get((req, res) => { res.status(200).send('API Free Market works!') });
};

// Disponibiliza a instância da indexRoutes para o arquivo app.js onde será executada antes de iniciar o servidor.
export default indexRoutes;