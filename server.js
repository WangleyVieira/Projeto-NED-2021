import app from './app';

const PORTA = process.env.PORTA || 8080;
app.listen(PORTA, function(){
    console.log(`Rodando a aplicacao`);
});