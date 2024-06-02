const {City} = require('../models/index'); 

class CityRepository{
    async createcity({name}){
        try {
            const city= await City.create({
                name:name
            });
            return city;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async deletecity(cityid){
        try {
            await City.destroy({
                where : {
                    id:cityid
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async updatecity(cityid,data){
        try {
            const city=await City.update(data,
                {
                where : {
                    id:cityid
                }
            });
            return city;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async getcity(cityid){
        try {
            const city= await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
}
module.exports =CityRepository;