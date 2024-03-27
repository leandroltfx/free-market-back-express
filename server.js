import 'dotenv/config';

import app from './src/app.js';

const PORT = process.env.port || 3000;

// A varíavel app, instância do Express, iniciará o servidor em determinada porta que será acessada
// pelo cliente (aplicações frontend, postman, etc).
app.listen(PORT, () => {
    console.log(`Servidor online na porta: ${PORT}`);
});