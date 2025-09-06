const express = require("express");
const app = express();
const PORT = 8082;


app.listen(PORT, ()=>{
    console.log(`Servidor Usuarios rodando em: http://localhost:${PORT}`);
});