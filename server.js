const express = require('express');
//Se crea el servidor
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 4000 ;

app.use(bodyParser.urlencoded({ extended: false }));
//Le indicamos que las respuestas se deben de mandar en formato JSON
app.use(bodyParser.json());
//Se habilitan las CORS para que no existan errores de cominicacion 
app.use(cors());

//Rutas
const router = express.Router();
//Se le tienen que mandar los parametros por el params porque vienen con la url
router.route('/results/:n1/:n2').get((req, res) => {
    n1 = req.params.n1;
    n2 = req.params.n2;
    
    messageResponse = { message : "Result "+(n1+n2) };
    res.status(200).json(messageResponse);
});

//Se le tienen que mandar los parametros por el body
router.route('/results/').post((req, res) => {
    n1 = req.body.n1;
    n2 = req.body.n2;
    
    messageResponse = { message : "Result "+(n1*n2) };
    res.status(200).json(messageResponse);
});

router.route('/results/').put((req, res) => {
    n1 = req.body.n1;
    n2 = req.body.n2;
    
    messageResponse = { message : "Result "+(n1/n2) };
    res.status(200).json(messageResponse);
});

router.route('/results/:n1/:n2').delete((req, res) => {
    n1 = req.params.n1;
    n2 = req.params.n2;
    
    messageResponse = { message : "Result "+(n1-n2) };
    res.status(200).json(messageResponse);
});

app.use('/', router);

//Metodo para lanzar la app por el puerto
server.listen(port, () => {
    console.log(`Server running on port ${port} ...`);
});
