const {Airplanes} = require('../models/index'); 

class AirplaneRepository{
    async getAirplane(planeId){
        try {
            console.log(planeId);
            const airplane=await Airplanes.findByPk(planeId);
            console.log("pp");
            return airplane;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
}

module.exports=AirplaneRepository;