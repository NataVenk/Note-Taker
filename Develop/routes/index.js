const router = require("express").Router()
const apiroutes = require("./apiroutes")
const htmlroutes = require("./htmlroutes")

router.use("/",htmlroutes)
router.use("/api", apiroutes)

module.exports = router