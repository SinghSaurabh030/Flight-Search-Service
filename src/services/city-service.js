
const {cityrepository}=require('../repository/index');

class cityservice {
    constructor(){
        this.cityrepository=new cityrepository();
    }
    async createcity(data){
        try {
            const city= await this.cityrepository.createcity(data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async deletecity(cityid){
        try {
            const respone= await this.cityrepository.deletecity(cityid);
            return response;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async updatecity(cityid,data){
        try {
            const city= await this.cityrepository.updatecity(cityid,data);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async getcity(cityid){
        try {
            const city= await this.getcity.updatecity(cityid);
            return city;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
}
module.exports= cityservice; 