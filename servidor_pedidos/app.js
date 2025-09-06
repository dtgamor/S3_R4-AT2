const express = require("express");
const app = express();
const PORT = 8083;


app.listen(PORT, ()=>{
    console.log(`Servidor Pedidos rodando em: http://localhost:${PORT}`);
});