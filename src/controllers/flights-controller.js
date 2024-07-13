const {FlightsService} = require('../services/index');


const flightsService= new FlightsService();

const create=async(req,res)=>{
    try {
        const flight=await flightsService.createFlight(req.body);
        return res.status(201).json({
            body:req.body,
            data:flight,
            success: true,
            message : 'sucessfully created a flight',
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data:{error},
            success: false,
            message : 'not able to create  a flight',
            err : {}
        });
    }
}

module.exports={
    create
}