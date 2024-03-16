import app from './src/app.js';

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor online na porta: ${PORT}`);
});