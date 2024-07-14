

const {FlightsRepository,AirplaneRepository}=require('../repository/index');
const {compareTime}=require('../utils/helper');

class FlightsService{
    constructor(){
        this.FlightsRepository=new FlightsRepository();
        this.AirplaneRepository=new AirplaneRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error:"arrival time cant be before departure"};
            }
            const plane=await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.FlightsRepository.createFlight({...data,totalSeats:plane.capacity});
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async getAllFlights(data){
        try {
            const flights=await this.FlightsRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    
}
module.exports=FlightsService;