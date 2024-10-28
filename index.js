const express= require('express');
const path=require('path');

// console.log("express",express);
const app=express();
const publicPath=path.join(__dirname,'public');//use if we want to use other folder rather than public


console.log("public path"+publicPath);
// console.log("app",app);
// app.use(express.static('public')) //use if we want to use public path.
app.use((req,res,next)=>
{
    console.log(req.url,req.method);
    // res.status(503).send('<h1>Site is under maintenance</h1>')
    next();
})
app.use(express.static(publicPath));
app.get('/users',(req,res)=> res.send("express js tutorial"))
app.get('/about',(req,res)=> res.send("about js tutorial"))
app.get('/help',(req,res)=>
{  
    const filepath=path.join(__dirname,'public','help.html')
    res.sendFile(filepath);
})
app.get('*',(req,res)=>
{
        // res.send("page not found");
        const filepath=path.join(__dirname,'public','404.html')
        res.sendFile(filepath);
});
app.listen(3030,()=>console.log("server started"))
