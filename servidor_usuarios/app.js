const express = require("express");
const app = express();
const PORT = 8082;


app.listen(PORT, ()=>{
    console.log(`Server listening http://localhost:${PORT}`);
});