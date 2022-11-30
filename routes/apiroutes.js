const router = require("express").Router()

const db = require("../db/db.json")
const fs = require("fs")



router.get('/notes', (req,res) => {
    console.log("get notes")
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    res.json(db)
})

router.post('/notes', (req,res) => {
    console.log("post notes")
    db.push(req.body)
    fs.writeFile("./db/db.json",  JSON.stringify(db), err => console.log (err))
    res.json(db)
    
})
// router.delete("/notes", (req,res) => {
//     console.log("post notes")
//     db.push(req.body)
//     fs.writeFile("./db/db.json",  JSON.stringify(db), err => console.log (err))
//     res.json(db)
    
// })


module.exports = router