const {Flights}=require('../models/index');

class FlightsRepository{
    async createFlight(data){
        try {
            console.log(data);
            console.log(Flights.create);
            const flight=await Flights.create({...data});
            return flight;
        } catch (error) {
            console.log("something went wrong in repo layer");
                throw(error);
        }
    }
}
module.exports=FlightsRepository;