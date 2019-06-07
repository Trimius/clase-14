const express = require('express');
const app = express();
const port = 9000


app.post('/', function(req, res){
    res.send('Contestando una peticion por Post.');
})

app.put('/', function(req, res){
    res.send('Contestando una peticion por Put.')
})

app.delete('/', function(req, res){
    res.send('Contestando una peticion por Delete.')
})


app.get('/', function (req, res){
    res.send('Contestando una peticion por Get.');
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
})

