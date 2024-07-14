const { where } = require("sequelize");

class CrudRepository{
    constructor(models){
        this.model=models;
    }
    async create(data){
        try {
            const created=await this.model.create(data);
            return created
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async destroy(modelId){
        try {
            await this.model.destroy({
                where:{
                    id:modelId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async get(modelId){
        try {
            const gotData=await this.model.findByPk(modelId);
            console.log(gotData);
            return gotData;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async getAll(){
        try {
            const allData=await this.model.findAll();
            return allData;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
    async update(modelId,data){
        try {
            const updated=await this.model.update(data,{
                where:{
                    id:modelId
                }
            })
            return updated;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw(error);
        }
    }
}
module.exports=CrudRepository;