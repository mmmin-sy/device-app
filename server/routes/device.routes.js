module.exports = app => {
    const devices = require('../controllers/device.controller');

    var router = require('express').Router();

    router.post('/', devices.create);
    router.get('/', devices.findAndCountAll);
    router.put('/:id', devices.update);
    router.delete('/:id', devices.delete);
    
    app.use('/api/device', router);
};