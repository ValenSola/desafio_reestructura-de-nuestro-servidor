/* ************************************************************************** */

/* /src/config/mongo.js - configuracion de mongoose. */
/* ************************************************************************** */

const mongoose = require('mongoose');
const { db } = require('./index');
const uri = "mongodb+srv://valentinosola23112003:<password>@ecommerce.wjptqkq.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce";
mongoose.set('debug', false);
mongoose.set('strictQuery', false);

let connection;

mongoose.connect(db.mongo_atlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: db.dbName,
});

connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Conexión exitosa a la base de datos');
});

connection.on('error', (error) => {
  console.error('Error en la conexión a la base de datos:', error);
});

module.exports = { connection };
