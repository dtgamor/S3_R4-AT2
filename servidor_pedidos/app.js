const express = require("express");
const app = express();
const PORT = 8083;


app.listen(PORT, ()=>{
    console.log(`Server listening http://localhost:${PORT}`);
});