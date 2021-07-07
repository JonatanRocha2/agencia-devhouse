const express = require('express'); //Importar o express

const app = express(); //Iniciar o serviço

app.get('/', (req, res) => {
   res.send('Seja bem vindo!');
}); //rota usando o metodo GET

app.get('/manutencao', (req, res) => {
    res.sendFile(__dirname + "/views/manutencao.html");
});

app.listen(3000, () => console.log("Server Start!")); //Definir porta e mandar mensagem de inicio