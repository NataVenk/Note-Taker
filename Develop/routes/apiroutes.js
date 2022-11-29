const router = require("express").Router()

const db = require("../db/db.json")
const fs = require("fs")

router.get("/Natalia/:banana/:potato", (req,res) => {
    console.log("Natalila is awesome")
    console.log (req.body)
    res.json("yes she is")
})

router.get("/notes", (req,res) => {
    console.log("get notes")
    
    res.json(db)
})

router.post("/notes", (req,res) => {
    console.log("post notes")
    db.push(req.body)
    fs.writeFile("./db/db.json",  JSON.stringify(db), err => console.log (err))
    res.json(db)
    
})

module.exports = router