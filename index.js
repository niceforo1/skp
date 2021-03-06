const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// Se importan los modelos
require('./models/Paciente');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

// Se crea la instancia del servidor de express para la aplicación
const app = express();
// ############################################### //
// Middlewares                                     //
// ############################################### //

// Se agrega el middleware body-parser para poder parsear
// las peticiones entrantes a la app por medio del request
app.use(bodyParser.json());

// ############################################### //
// Rutas                                           //
// ############################################### //

// Se agregan las rutas que se van a manejar dentro de la aplicación
// se le pasa por parametro al archivo externo el cual modifica la app
// agregando las rutas necesarias para la aplicación
require('./routes/pacientesRoutes')(app, mongoose);

// Consulta de ambientes, para el caso que sea production
// el frontend se carga desde el build y se setea como middleware
// para que todas las peticiones del front no sean procesadas por el backend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // En el caso que no encuentre la ruta, lo pasa para que procese el frontend
  // por medio del index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Se genera la instancia del servidor en el puerto XX
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running in port: ${PORT}`);
});
