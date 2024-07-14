const express = require("express")
const app = express()

app.get( "/" ,(req, res) => {
    //  res.sendStatus(500)
    //  res.status(500).send("hi")
    //  res.download("server.js")
})

app.listen(3000)