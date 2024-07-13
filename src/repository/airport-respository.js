const {Airport}= require('../model/index');

class AirportRepository{
    async createAirport({name,address,cityId}){
        try {
            const airport= await Airport.create({
                name,
                address,
                cityId

            });
            return airport;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
}

module.exports =AirportRepository;