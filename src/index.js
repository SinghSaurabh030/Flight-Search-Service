const express= require("express");
const bodyParser = require("body-parser");
const { PORT }=require('./config/serverconfig');
const apiRoutes=require('./routes/index');


const setupandstartserver = async() => {
    //creat express object
    const app=express();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
 

    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
         
    });
}
setupandstartserver();