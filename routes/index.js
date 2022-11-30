const router = require("express").Router()

// import routes for api and html
const apiroutes = require("./apiroutes")
const htmlroutes = require("./htmlroutes")


router.use("/", htmlroutes)
router.use("/api", apiroutes)

module.exports = router