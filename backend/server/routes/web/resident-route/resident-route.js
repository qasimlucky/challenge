var router = require('express').Router();

const { 
    CreateResident,
    UpdateResident,
    getResident
    
} = require('../../../controllers/web/resisdents/residents-controller');

router.post('/create',CreateResident);
router.post('/update',UpdateResident);
router.get('/list',getResident);


module.exports = router;