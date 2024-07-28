const {FlightsService} = require('../services/index');


const flightsService= new FlightsService();

const create=async(req,res)=>{
    try {
        let flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departueAirportId:req.body.departueAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price

        }
        const flight=await flightsService.createFlight(flightRequestData);
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
            message : 'sucessfully fetched  flights',
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
const get=async(req,res)=>{
    try {
        console.log(req.params.id);
        const flight=await flightsService.getFlight(req.params.id);
        return res.status(201).json({
            data:flight,
            success: true,
            message : 'sucessfully fetched a flight',
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data:error,
            success: false,
            message : 'not able to fetch flight',
            err : {}
        });
    }
}
const updateFlight=async (req,res)=>{
    try {
        const response=await flightsService.updateFlight(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            success: true,
            message : 'sucessfully updated a flight',
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data:error,
            success: false,
            message : 'not able to update flight',
            err : {}
        });
    }
}

module.exports={
    create,
    getAllFlights,
    get,
    updateFlight
}