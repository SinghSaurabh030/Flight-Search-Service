const {cityservice} = require('../services/index');
const cityService=new cityservice();
const create= async (req,res)=>{
    try {
        const city = await cityService.createcity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'sucessfully create city',
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to create city',
            err : error
        });
    }
}
const destroy= async (req,res)=>{
    try {
        const response = await cityService.deletecity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'sucessfully deleted city',
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to delete the city',
            err : error
        });
    }
}
const update= async (req,res)=>{
    try {
        const city = await cityService.updatecity(req.params.id,req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'sucessfully updated a city',
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to update the city',
            err : error
        });
    }
}
const get= async (req,res)=>{
    try {
        const city = await cityService.getcity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'sucessfully fetched the city',
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success :false,
            message : 'not able to get city',
            err : error
        });
    }
}
module.exports={
    create,
    destroy,
    update,
    get
}