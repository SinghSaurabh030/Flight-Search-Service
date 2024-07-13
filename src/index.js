const express= require("express");
const bodyParser = require("body-parser");
const { PORT }=require('./config/serverconfig');
const apiRoutes=require('./routes/index');
const {cityrepository}=require('./repository/index');
const {City,Airport}=require('./models/index');
const { where } = require("sequelize");
const db = require('./models/index');


const setupandstartserver = async() => {
    //creat express object
    const app=express();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
 

    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);

        // const city=await City.findOne({
        //     where:{
        //         id:4
        //     }
        // });
        // const airport=await city.getAirports();
        // let newAirport=await Airport.create({
        //     name: 'Behala Airport',
        //     cityId:8
        // });

        const city=await City.findOne({
            where:{id : 4}
        });
        const newAirport=await Airport.findOne({
            where:{id : 5}
        });

        console.log(city,newAirport);
        await city.addAirport(newAirport);


    });
}
setupandstartserver();