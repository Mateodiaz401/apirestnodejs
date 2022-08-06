const express = require('express');
const routerApi = require('../routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hola mundo desde express');
});
app.get('/nueva-ruta', function (req, res) {
  res.send('Esto es la ruta del nueva-ruta');
});

routerApi(app);
app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
})
