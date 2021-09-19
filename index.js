// Modules
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);

// async
(async () => {

//Variable basique
var optionPath = { root: path.join(__dirname) };
var PORT = 3000;
app.use(express.static(path.join(__dirname, '/public/')));



app.get('/', (req, res) => {
    res.sendFile('./public/view/index.html', optionPath, function (err){
        if(err) {
            next(err);
        }
    })
})



http.listen(PORT, function(err){
    if(err) {console.log(err)}
    console.log("Lancé sur le port: "+ PORT);
})


})() // end async