const express = require("express")
const app = express()

app.set("view engine", "ejs")
// app.use(logger)

app.get( "/" ,(req, res) => {
    //  res.sendStatus(500)
    //  res.status(500).send("hi")
    //  res.download("server.js")
    res.render("index", {text: "world"})
})

const userRouter = require("./routes/users");

app.use( "/users" ,userRouter)

// function logger(req, res, next){
//     console.log(req.originalUrl)
//     next();
// }

app.listen(3000)