const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hola mundo desde Express!\n')
})
app.listen(port, ()=>{
    console.log(`The server is listening on http://localhost:${port}`);
});





