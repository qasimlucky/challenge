var router = require('express').Router();

const { 
    CreateCenter,
    UpdateCenter,
    getCenters

    
} = require('../../../controllers/web/center/center-controller');

router.post('/create',CreateCenter);
router.post('/update',UpdateCenter);
router.get('/list',getCenters);

module.exports = router;