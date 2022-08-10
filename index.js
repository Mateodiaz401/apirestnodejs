const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomerrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
/*Lista blasca que pueden hacer peticiones*/
const whitelist = ['http://localhost:3000', 'https://sipse.com'];
/*crear la opcion que tendra acceso*/
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'))
    }
  }
}

app.use(cors(options));

app.get('/', function (req, res) {
  res.send('Hola mundo desde express');
});
app.get('/nueva-ruta', function (req, res) {
  res.send('Esto es la ruta del nueva-ruta');
});

routerApi(app);
/** use de middleware  */
app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
})
