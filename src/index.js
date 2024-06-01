const express= require("express");
const bodyParser = require("body-parser");
const { PORT }=require('./config/serverconfig');
const{ City }=require('./repository/city-repository');
const CityRepository = require("./repository/city-repository");
const setupandstartserver = async() => {
    //creat express object
    const app=express();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        const repo=new CityRepository();
        repo.createcity({name:"Mumbai"});
    });
}
setupandstartserver();