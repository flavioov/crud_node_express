//importa o express
const express = require('express');
// importa o arquivo-rota onde será implementado as requests e
// salva nesta variável
const routes = require('./routes');

const PORT = 3333;
const HOST = '0.0.0.0';

//Importa o arquivo que instancia a conexão com o banco de dados
require('./database');

//instancia a função do express na variável/constante 'app'
const app = express();

// diz ao servidor para utilizar o formato json
app.use(express.json());
//diz ao servidor para usar essa rota
app.use(routes);


// configura o servidor para ouvir as requisiões na porta 3333
app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);