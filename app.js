const express = require("express");

const app = express();
app.use(express.json());

const port = 3000

// path inicial, responderá a la url localhost: 300
app.get('/', (req, res) => {
    res.send('Hello World!, Welcome to Code Challenge')
})


// Inicializar la app
app.listen(port, () => {
    console.log(`CodeChallenge API in localhost: ${port}`)
})