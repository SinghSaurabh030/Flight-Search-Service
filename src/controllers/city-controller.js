const CityRepository = require('../repository/city-repository');
const {cityservice} = require('../services/index');

const CityService= new cityservice();

const create=async (req,res)=>{
    try{
        const city=await CityService.createcity(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message : 'sucessfully created a city',
            err : {}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message : 'not able to create  a city',
            err : {}
        });
    }
}

const destroy=async (req,res)=>{
    try{
        const response=await CityService.deletecity(req.params.id);
        return res.status(201).json({
            data:response,
            success: true,
            message : 'sucessfully deleted a city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message : 'not able to delete  a city',
            err : {}
        });
    }
}

const update=async (req,res)=>{
    try{
        const response=await CityService.updatecity(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            success: true,
            message : 'sucessfully update a city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message : 'not able to update  a city',
            err : {}
        });
    }
}

const get=async (req,res)=>{
    try{
        const response=await CityService.getcity(req.params.id);
        return res.status(201).json({
            data:response,
            success: true,
            message : 'sucessfully get a city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message : 'not able to get  a city',
            err : {}
        });
    }
}

const getAll=async(req,res)=>{
    try{
        const response=await CityService.getAll(req.query);
        return res.status(201).json({
            data:response,
            success: true,
            message : 'sucessfully get all  city',
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message : 'not able to get  all city',
            err : {}
        });
    }
}

module.exports={
    create,
    destroy,
    update,
    get,
    getAll
}