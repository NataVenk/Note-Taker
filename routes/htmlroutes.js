const router = require("express").Router()



router.get('/', (req, res) =>
  res.sendFile('/public/index.html'));




module.exports = router