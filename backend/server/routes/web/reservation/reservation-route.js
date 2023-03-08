var router = require('express').Router();

const { 
    CreateReservation,
    UpdateResevation,
    getReservation,
    RemoveReservation    
} = require('../../../controllers/web/reservation/reservation-controller');

router.post('/create',CreateReservation);
router.post('/update',UpdateResevation);
router.get('/list',getReservation);
router.post('/remove',RemoveReservation);

module.exports = router;