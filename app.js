import express from 'express';
import path from 'path';

const app = express();


/**
 * Configuração estática
 */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/estilo', express.static('./views/css')); //rotas de css
app.use('/imagem', express.static('./views/img')); //rota de imagens


app.use('/login', express.static('./views/'));
app.use('/ConhecerEquipe', express.static('./views/'));
app.use('/PaginaInicial', express.static('./views/'));
// app.use('', express.static(__dirname + ''));
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
//  app.use(express.json());
//  app.use(express.urlencoded({
//      extended: true
//  }))
// /**
//  * Rotas
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
//Login
app.get('/Login', function(req, resp){
    resp.render('Login')
});


export default app;
