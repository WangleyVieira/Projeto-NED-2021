import express from 'express';
import path from 'path';

const app = express();

require('dotenv').config()

/**
 * Configuração estática
 */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/estilo', express.static('./views/css')); //rotas de css
app.use('/imagem', express.static('./views/img')); //rota de imagens
app.use('/imagem-semana', express.static('./views/img-semana-consciencia'));

app.use('/JS', express.static(__dirname + '/JS'));

app.use('/login', express.static('./views/'));
app.use('/ConhecerEquipe', express.static('./views/'));
app.use('/ApresentacaoProjeto', express.static('./views/'));
app.use('/PaginaInicial', express.static('./views/'));
app.use('/PaginaInicialLogin', express.static('./views/'));
app.use('/FormularioAlbum', express.static('./views/'));

/**
 * Configuração da página 
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Rotas testes da aplicação
 */

app.get('/test', function(req, resp){
    resp.render('test')
});


/**
 * Configuração do parser para requisições post
 */
 app.use(express.json());
 app.use(express.urlencoded({
     extended: true
 }))

 app.post('/', (req, res) => {
    res.json(req.body)
  })


// // /**
// //  * Rotas
//  */
 const routes = require('./API/routers');
 routes(app);



//pagina inicial
app.get('/PaginaInicial', function(req, resp){
    resp.render('paginaInicial')
});
//Conheca Nossa Equipe
app.get('/ConhecerEquipe', function(req, resp){
    resp.render('conhecaEquipe')
});

//apresentacao do projeto
app.get('/ApresentacaoProjeto', function(req, resp){
    resp.render('ApresentacaoProjeto')
});

//Login
app.get('/Login', function(req, resp){
    resp.render('Login');
    //resp.sendFile(__dirname + '/views/login.html');
});

//Area ADMIN, pagina inicial de login
app.get('/PaginaInicialLogin', function(req, resp){
    resp.render('PaginaInicialLogin')
});

//Formulario album
app.get('/FormularioAlbum', function(req, resp){
    resp.render('Form-Album')
});

export default app;
