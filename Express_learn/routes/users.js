const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/new", (req, res) => {
  res.send("New user is here");
});

router.get("/post", (req, res) => {
  res.send("Post is here");
});

router.post("/", (req, res) => {
  res.send("create post");
});


router
  .route("/:id")
  .get((req, res) => {
    res.send(`user is here with the Id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });



module.exports = router;

// routers search top to bottom... its recommended that /:id  write on bottom
