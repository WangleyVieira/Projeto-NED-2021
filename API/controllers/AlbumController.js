//Automaticamente ele encontra o arquivo index.js dentro da pasta
const database = require('../models');

/**
 * CRUD
 */
class AlbumController{
    //assync:espera resolver tudo dentro do metodo antes do envio da resposta
    static async ListarAlbuns(req, res){
        try {
            //await: aguarda até receber a resposta do BD
            const todosOsAlbuns = await database.AlbunsNeds.findAll();

           //return res.status(200).json(todosOsAlbuns); //teste de retorno no postman
            
            res.render('PaginaInicialLogin', { todosOsAlbuns });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmAlbum(req, res){
        const {id} = req.params;
        try {
            const umAlbum = await database.AlbunsNeds.findOne({
                where:{
                    id: Number(id)
                }
            });
            return res.status(200).json(umAlbum);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaAlbum(req, res){
        const novoAlbum = req.body;
        try {
            const novoAlbumCriado = await database.AlbunsNeds.create(novoAlbum);
            return res.status(200).json(novoAlbumCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaAlbum(req, res){
        const novasInfosAlbuns = req.body;
        const {id} = req.params;
        try {
            await database.AlbunsNeds.update(novasInfosAlbuns, {
                where: {id: Number(id)} });
                const albumAtualizado = await database.AlbunsNeds.findOne({
                    where: {id: Number(id)}
                });
            return res.status(200).json(albumAtualizado);
        } catch (error) {
            return res.status(500).json(erros.message);
        }
    }

    static async apagarAlbum(req, res){
        const {id} = req.params;
        try {
            await database.AlbunsNeds.destroy({
                where: {id: Number(id)}
            });
            return res.status(200).json({
                mensagem: `id ${id} album deletado`
            });
        } catch (error) {
            return res.status(500).json(erros.message);
        }
    }
}

module.exports = AlbumController

