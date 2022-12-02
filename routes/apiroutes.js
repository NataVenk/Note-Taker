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
    var newDb = fs.readFileSync("./db/db.json", "utf8")
    let note = JSON.parse(newDb)
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))

    res.json(note)
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
router.delete('/notes/:id', (req,res) => {
    console.log("delete notes")
   
    var newDb = fs.readFileSync("./db/db.json", "utf8")
    let note = JSON.parse(newDb)
    newDb2 = note.filter(note => note.id !== req.params.id)
    fs.writeFile("./db/db.json",  JSON.stringify(newDb2), err => console.log (err))
    res.json(newDb2)
    
})


module.exports = router