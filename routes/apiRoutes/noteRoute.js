const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
let noteSpot = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let entry = JSON.parse(fs.readFileSync('./db/db.json'));
    
    noteSpot = entry;

    res.json(noteSpot);
});

router.get('/notes/:id', (req, res) => {
    const savedNote = findById(req.params.id, noteSpot);
    if(savedNote) {
        res.json(savedNote);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    let newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    console.log(newNote);

    noteSpot.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(noteSpot), function (err) {
            if (err) 
            throw err;
        })
    res.json(noteSpot);

});

// router.delete('/notes/:id', (req, res) => {
//     const delNote = req.params.id;

//     console.log(delNote);

//     res.end();

// });

module.exports = router;