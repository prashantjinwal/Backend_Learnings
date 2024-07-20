const express = require("express");
const router = express.Router();

router.use(logger)

router.get("/", (req, res) => {
  console.log(req.query.name)
  res.send("Users List ");
});

router.get("/new", (req, res) => {
  res.send("New user is here");
});

router.get("/post", (req, res) => {
  res.send("Post is here");
});

router.post("/", (req, res) => {
//    res.send("create post");
    const isVaild = true;
    if(isVaild){
        users.push({firstName : req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("error")
        res.render("users/new", {firstName : req.body.firstName})
    }


});


router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`user is here with the Id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });


const users = [{name:"kyle", name:"lassi"}]
router.param("id", (req, res, next , id)=>{
    req.user = users[id]
    next()
})


function logger(req, res, next){
    console.log(req.originalUrl)
    next();
}



module.exports = router;

// routers search top to bottom... its recommended that /:id  write on bottom
