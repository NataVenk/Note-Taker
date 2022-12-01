const router = require("express").Router()

const db = require("../db/db.json")
const fs = require("fs")

const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };


router.get('/notes', (req,res) => {
    console.log("get notes")
    
    res.json(db)
})

router.post('/notes', (req,res) => {
    console.log("post notes")
    //copy values from req.body and randomly select id
    const newNote = {
        id: uuid(),
        title: req.body.title ,
        text: req.body.text ,
    }
    db.push(newNote)
    fs.writeFile("./db/db.json",  JSON.stringify(db), err => console.log (err))
    res.json(db)
    
})
router.delete('/notes/:note_id', (req,res) => {
    console.log("delete notes")
    newDB = db.filter(note => note.id  !== req.params.note_id)
    fs.writeFile("./db/db.json",  JSON.stringify(newDB), err => console.log (err))
    res.json(db)
    
})


module.exports = router