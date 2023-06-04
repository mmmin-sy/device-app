const db = require('../models');
const Device = db.devices;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
exports.create = (req, res) => {
    const device = {
        deviceName: req.body.deviceName,
        deviceType: req.body.deviceType,
        ownerName: req.body.ownerName,
        batteryStatus: req.body.batteryStatus,
    };

    Device.create(device)
        .then(data => res.send(data))
        .catch(error => res.status(500).send({
            message: error.message || ''
        }));
};

exports.findAndCountAll = (req, res) => {
    const page = req.query.page;
    const orderBy = req.query.orderBy === '' ? 'id' : req.query.orderBy;
    const order = req.query.order === '' ? 'ASC' : req.query.order;
    const search = req.query.search;
    const searchType = req.query.searchType;
    const limit = 10;
    const offset = (page - 1) * limit;
    let whereStatement = '';

    if (searchType) {
      switch(searchType) {
          case 'deviceName':
            whereStatement = {deviceName: {[Op.like]: `%${search}%`}}
            break;
          case 'deviceType':
            whereStatement = {deviceType: {[Op.like]: `%${search}%`}}
            break;
          case 'ownerName':
            whereStatement = {ownerName: {[Op.like]: `%${search}%`}}
            break;
          case 'batteryStatus':
            whereStatement = {batteryStatus: {[Op.like]: `%${search}%`}}
            break;
          case 'all':
            whereStatement =  {
              [Op.or]: [
                {deviceName: {[Op.like]: `%${search}%`}},
                {deviceType: {[Op.like]: `%${search}%`}},
                {ownerName: {[Op.like]: `%${search}%`}},
                {batteryStatus: {[Op.like]: `%${search}%`}}
              ]
            }  
        }
    } 

    Device.findAndCountAll({
      attributes: ['id', 'deviceName', 'deviceType', 'ownerName', 'batteryStatus'],
      limit,
      offset,
      order: [[orderBy, order]],
      where: search ? whereStatement : {}
    })
        .then(data => res.send(data))
        .catch(error => res.status(500).send({
            message: error.message || ''
        }));
};

exports.update = (req, res) => {
    Device.update(req.body, { where: { id: req.params.id }})
        .then(num => {
            if (num == 1) {
                res.send({
                  message: "Device was updated successfully."
                });
              } else {
                res.send({
                  message: `Cannot update Device with id=${req.params.id}.`
                });
              }    
        })
        .catch(error => res.status(500).send({
            message: "Error updating Device id=" + req.params.id
        }));
};

exports.delete = (req, res) => {
    Device.destroy({ where: { id: req.params.id }})
    .then(num => {
        if (num == 1) {
            res.send({
              message: "Device was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Device with id=${req.params.id}.`
            });
          }    
    })
    .catch(error => res.status(500).send({
        message: "Error deleting Device id=" + req.params.id
    }));
};
