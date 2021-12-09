const express = require("express");
const app = express();
//const bodyParser = require('body-parser');


// require('dotenv').config()

// /**
//  * Configuração do parser para requisições post
//  */
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }))

/**
* Colocar servidor no ar
*/
const PORTA = process.env.PORT || 8080;
app.listen(PORTA, function () {
    console.log(`Rodando aplicacao`)
})

/**
 * Rotas
 */
/*
 app.get('/teste', (req, res) => res
 .status(200)
 .send({
     mensagem: 'Bem vinda!!'
 })); 
 */
//  app.post('/', (req, res) => {
//     res.json(req.body)
//   })


 const routes = require('./routers');
 routes(app);
 