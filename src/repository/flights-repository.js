const { Op } = require('sequelize');
const {Flights}=require('../models/index');

class FlightsRepository{
    #createFilter(data){
        const filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departueAirportId=data.departueAirportId;
        }
        let priceFilter=[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});


        return filter;
        
    }
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
    async getFlight(flightId){
        try {
            const flight=await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async getAllFlights(filter){
        try {
            console.log(filter);
            console.log("REGH");
            const FilterObject=this.#createFilter(filter);
            console.log(FilterObject);
            const flights=await Flights.findAll({
                where:FilterObject
            });
            return flights;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
}
module.exports=FlightsRepository;