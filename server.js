//all required dependencies
const fs = require('fs');
const path = require('path');
const express = require('express');

//initialize express app 
const app = express();
//provide port
const PORT = process.env.PORT || 3001;


//parse incoming string or array data, converst to key/value pairing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//parse incoming JSON data
app.use(express.json());



//app get for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'));
    res.json(data);
});

app.post('/api/notes', (req, res) =>{

});

//set up port and console to show activity
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}.`);
})