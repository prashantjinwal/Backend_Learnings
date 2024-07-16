const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.json())


// app.use(logger)

app.get( "/" ,(req, res) => {
    //  res.sendStatus(500)
    //  res.status(500).send("hi")
    //  res.download("server.js")
    // res.render("index", {text: "world"})
    res.render("user/new.ejs")
})

const userRouter = require("./routes/users");

app.use( "/users" ,userRouter)

// function logger(req, res, next){
//     console.log(req.originalUrl)
//     next();
// }

app.listen(3000)