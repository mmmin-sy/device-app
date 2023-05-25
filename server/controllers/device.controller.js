const db = require('../models');
const Device = db.devices;
const Op = db.Sequelize.Op;

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

exports.findAll = (req, res) => {
    Device.findAll()
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
