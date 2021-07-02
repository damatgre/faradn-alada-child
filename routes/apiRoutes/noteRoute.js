const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
let noteSpot = require('../../db/db.json');


//api for all notes
router.get('/notes', (req, res) => {
    //read json file
    let entry = JSON.parse(fs.readFileSync('./db/db.json'));
    
    noteSpot = entry;

    //send response
    res.json(noteSpot);
});

//get specific notes
router.get('/notes/:id', (req, res) => {
    //variable to search for note
    const savedNote = findById(req.params.id, noteSpot);
    if(savedNote) {
        //if found give specific note
        res.json(savedNote);
    } else {
        res.send(404);
    }
});

//post request for new note
router.post('/notes', (req, res) => {
    //variable to store new note data
    let newNote = {
        //uuid gives 20 character unique id
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    //console.log(newNote);

    //push new note to db.json
    noteSpot.push(newNote);

    //write data to json file
    fs.writeFileSync("./db/db.json", JSON.stringify(noteSpot), function (err) {
            if (err) 
            throw err;
        })
        //send response
    res.json(noteSpot);

});

// router.delete('/notes/:id', (req, res) => {
    
    
//     //variable used to delete specific note
//     const delNote = noteSpot.find(({ id }) => id === JSON.parse(req.params.id));

//     console.log(delNote);

//     //read data of json file/where notes are stored
//     let entry = JSON.parse(fs.readFileSync('./db/db.json'));

//     let newArray = entry.filter( delNote => delNote.id.toString() !== delNote);

//     fs.writeFileSync('./db/db.json', JSON.stringify(newArray));
    
//     res.json(newArray);

// });

module.exports = router;