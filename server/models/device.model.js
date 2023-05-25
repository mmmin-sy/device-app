module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define('device', {
        deviceName: {
            type: Sequelize.STRING(80),
        },
        deviceType: {
            type: Sequelize.STRING(80),
        },
        ownerName: {
            type: Sequelize.STRING(80),
        },
        batteryStatus: {
            type: Sequelize.INTEGER,
        },
    });

    return Device;
}