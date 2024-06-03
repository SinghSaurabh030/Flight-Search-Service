const express= require('express');
const CityControllers = require('../../controllers/city-controller');

const router = express.Router();
router.post('/city',CityControllers.create);
router.delete('/city/:id',CityControllers.destroy);
router.get('/city/:id',CityControllers.get);
router.patch('/city/:id',CityControllers.update);

module.exports=router;

