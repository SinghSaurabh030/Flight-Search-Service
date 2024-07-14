const {AirportService}=require('../services/index');
const airportService= new AirportService();

const create=async(req,res)=>{
 try {
    const response=await airportService.create(req.body);
    return res.status(201).json({
        data:response,
        success: true,
        message : 'sucessfully created an airport',
        err : {}
    });
 } catch (error) {
    return res.status(500).json({
        data:{},
        success: false,
        message : 'not able to create airport',
        err : {}
    });
 }   
}
const destroy=async(req,res)=>{
    try {
        const response=await airportService.destroy(req.params.id);
       return res.status(201).json({
           data:response,
           success: true,
           message : 'sucessfully deleted an airport',
           err : {}
       });
    } catch (error) {
       return res.status(500).json({
           data:{},
           success: false,
           message : 'not able to delete an airport',
           err : {}
       });
    }   
   }
   const get=async(req,res)=>{
    try {
        const response=await airportService.get(req.params.id);
       return res.status(201).json({
           data:response,
           success: true,
           message : 'sucessfully fetched   airport',
           err : {}
       });
    } catch (error) {
       return res.status(500).json({
           data:{},
           success: false,
           message : 'not able to fetch  airport',
           err : {}
       });
    }   
   }
   const getAll=async(req,res)=>{
    try {
        const response=await airportService.getAll();
       return res.status(201).json({
           data:response,
           success: true,
           message : 'sucessfully fetched all  airports',
           err : {}
       });
    } catch (error) {
       return res.status(500).json({
           data:{},
           success: false,
           message : 'not able fetch airports',
           err : {}
       });
    }   
   }
   const update=async(req,res)=>{
    try {
        const response=await airportService.update(req.params.id,req.body);
       return res.status(201).json({
           data:response,
           success: true,
           message : 'sucessfully updated airport',
           err : {}
       });
    } catch (error) {
       return res.status(500).json({
           data:{},
           success: false,
           message : 'not able to update airport',
           err : {}
       });
    }   
   }
   module.exports={
    create,
    destroy,
    get,
    getAll,
    update
   }