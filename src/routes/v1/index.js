const express= require('express');
const CityControllers = require('../../controllers/city-controller');
const FlightController=require('../../controllers/flights-controller');
const airportController=require('../../controllers/airport-controller');
const {validateCreateFlight}=require('../../middlewares/flight-middlewares');

const router = express.Router();

router.post('/city/all',CityControllers.createMany);
router.get('/city/all',CityControllers.getAll);
router.post('/city',CityControllers.create);
router.delete('/city/:id',CityControllers.destroy);
router.get('/city/:id',CityControllers.get);
router.patch('/city/:id',CityControllers.update);

router.post('/flights',validateCreateFlight,FlightController.create);
router.get('/flights',FlightController.getAllFlights);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.updateFlight);

router.post('/airports',airportController.create);

router.get('/airports/:id',airportController.get);

module.exports=router;

