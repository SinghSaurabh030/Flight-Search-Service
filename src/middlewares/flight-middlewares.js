const {ClientErrorsCodes}=require('../utils/error-codes');
const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departueAirportId||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price

    ){
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data:{},
            success: false,
            message : 'incomplete data',
            err : {}
        });
    }
    next();
}
module.exports={
    validateCreateFlight
}