const express = require("express")
const router = express.Router()


router.get("/", (req, res)=>{
    res.send("users")
})

router.get("/new", (req, res)=>{
    res.send("New user is here")
})

module.exports = router