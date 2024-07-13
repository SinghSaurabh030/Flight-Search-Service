const {airportrepository}=require('../repository/index');

let AirportRepository=new airportrepository();

const createAirport=async(airport)=>{
    try {
        const airport= await AirportRepository.createAirport(data);
        return airport;
    } catch (error) {
        console.log("something went wrong in service layer");
        throw(error);
    }
}
module.exports={
    createAirport
}