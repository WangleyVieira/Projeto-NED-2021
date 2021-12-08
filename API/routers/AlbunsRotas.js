//Importando o Router do express
//As chaves indicam que a propriedade Router de express será atribuída a uma constande de mesmo nome

const {Router} = require('express');
const AlbumController = require('../controllers/AlbumController');

const router = Router();
//Iniciando o Router da express
router.get('/PaginaInicialLogin', AlbumController.ListarAlbuns);
router.get('/AlbumNegritude/:id', AlbumController.pegaUmAlbum);
router.post('/AlbumNegritude', AlbumController.criaAlbum);
router.put('/AlbumNegritude/:id', AlbumController.atualizaAlbum);
router.delete('/AlbumNegritude/:id', AlbumController.apagarAlbum);

module.exports = router;