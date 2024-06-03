
const {cityrepository}=require('../repository/index');

class cityservice {
    constructor(){
        this.cityRepository=new cityrepository(); 
    }
    async createcity(data){
        try {
            const city= await this.cityRepository.createcity(data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async deletecity(cityid){
        try {
            const response= await this.cityRepository.deletecity(cityid);
            return response;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async updatecity(cityid,data){
        try {
            const city= await this.cityRepository.updatecity(cityid,data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async getcity(cityid){
        try {
            const city= await this.cityRepository.getcity(cityid);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
}
module.exports= cityservice; 