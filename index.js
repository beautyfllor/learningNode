const express = require('express');
const app = express();

//Test GET route
app.get('/', (req, res) => {
    res.send('Any answer'); 
})

//Dentists listing GET route
app.get('/listagemDentistas', (req, res) => {
    res.send('Dentist listing answer'); 
})

app.listen(3000, ()=>{
    console.log('Application running on - http://localhost:3000');
});