const express = require("express")
const router = express.Router()


router.get("/", (req, res)=>{
    res.send("users")
})

router.get("/new", (req, res)=>{
    res.send("New user is here")
})

router.get("/post", (req, res)=>{
    res.send("Post is here")
})

router.post("/", (req, res)=>{
    res.send("create post")
})

router.get("/:id",(req, res)=>{
    res.send(`user is here with the Id ${req.params.id}`)
})

module.exports = router