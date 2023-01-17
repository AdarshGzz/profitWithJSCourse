const express = require('express');
const app = express();
const Post = require("./js/post");
const postsData = new Post();


app.get("/api/posts",(req,res)=>{
    res.status(200).send(postsData.get());
});

app.listen(3000, ()=> console.log("listenint on http://localhost:3000"));