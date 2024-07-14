const {FlightsService} = require('../services/index');


const flightsService= new FlightsService();

const create=async(req,res)=>{
    try {
        const flight=await flightsService.createFlight(req.body);
        return res.status(201).json({
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
const getAllFlights=async(req,res)=>{
    try {
        console.log(req.params);
        const flights=await flightsService.getAllFlights(req.query);
        return res.status(201).json({
            data:flights,
            success: true,
            message : 'sucessfully created a flight',
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data:{error},
            success: false,
            message : 'not able to fetch flights',
            err : {}
        });
    }
}

module.exports={
    create,
    getAllFlights
}