
class CrudService{
    constructor(Repository){
        this.repository=Repository;
    }
    async create(data){
        try {
            const created=await this.repository.create(data);
            return created;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async destroy(id){
        try {
            await this.repository.destroy({
                where:{
                    id:id
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async get(id){
        try {
            const gotData=await this.repository.get(id);
            return gotData;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async getAll(){
        try {
            const gotAllData=await this.repository.getAll();
            return gotAllData;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async update(id,data){
        try {
            const updtRes=await this.repository.update(data,{
                where:{
                    id:id
                }
            });
            return updtRes;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
}
module.exports=CrudService;