const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');
const { envioCorreo } = require('./controllers/correoController');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));
// app.use(envioCorreo)
app.listen('3000',()=>{
    console.log('escuchando');
})
