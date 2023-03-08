var router = require('express').Router();

const { 
    Createnurse,
    UpdateNurse,
    getNurse

} = require('../../../controllers/web/nurses/nurse-controller');

router.post('/create',Createnurse);
router.post('/update',UpdateNurse);
router.get('/list',getNurse);


module.exports = router;