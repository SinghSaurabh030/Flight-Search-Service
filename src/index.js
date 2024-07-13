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

        // app.get('/del',async (req,res)=>{
        //     const cities = req.body;
        //     if (!Array.isArray(cities)) {
        //       return res.status(400).send({ error: 'Request body must be an array of objects' });
        //     }
        //     const createdCity = await City.bulkCreate(cities);
        //     res.status(201).send(createdCity);
        // });
        

    });
}
setupandstartserver();