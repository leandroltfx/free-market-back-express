import mongoose from "mongoose";

async function connectInDatabase() {
    // Estabelecendo conexão
    mongoose.connect(process.env.DB_CONECTION_STRING);

    // Retornando objeto com conexão estabelecida
    return mongoose.connection;
}

export default connectInDatabase;
