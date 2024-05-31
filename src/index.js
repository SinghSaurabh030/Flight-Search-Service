const express= require("express");
const { PORT }=require('./config/serverconfig');
const setupandstartserver = async() => {
    //creat express object
    const app=express();
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    });
}
setupandstartserver();