const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
let noteSpot = require('../../db/db.json');

router.get('/notes/:id', (req, res) => {
    let entry = JSON.parse(fs.readFileSync('./db/db.json'));
    
    noteSpot = entry;

    res.json(noteSpot);
});

router.post('/notes', (req, res) => {
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        note: req.body.text
    }

    noteSpot.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(noteSpot), function (err) {
            if (err) 
            throw err;
        })
    res.json(noteSpot);

});

router.delete('/notes/:id', (req, res) => {
    const delNote = req.params.id;


});

module.exports = router;