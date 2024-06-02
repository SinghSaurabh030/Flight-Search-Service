const express= require("express");
const bodyParser = require("body-parser");
const { PORT }=require('./config/serverconfig');
const CityRepository = require("./repository/city-repository");
const setupandstartserver = async() => {
    //creat express object
    const app=express();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
        const repo=new CityRepository();
        repo.deletecity(1);
    });
}
setupandstartserver();