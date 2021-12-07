const albuns = require('./AlbunsRotas');
const usuarios = require('./UsuariosRotas');
/**
 * Sintaxe de uma função qualquer: function () {}
 * Sintaxe de uma arrow function: () => {}
 */

module.exports = app => {
    app.use(albuns);
    app.use(usuarios);
}
/** 
module.exports = function app(){
    app.use(estudantes);
}
**/