const {AirportRepository}=require('../repository/index');
const CrudService=require('./crud-services');

class AirportService extends CrudService{
    constructor(){
        const airportRepository=new AirportRepository();
        super(airportRepository);
    }
}
module.exports=AirportService;         