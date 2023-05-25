module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define('device', {
        deviceName: {
            type: Sequelize.STRING(80),
            allowNull: false,
        },
        deviceType: {
            type: Sequelize.STRING(80),
            allowNull: false,
        },
        ownerName: {
            type: Sequelize.STRING(80),
            allowNull: false,
        },
        batteryStatus: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });

    return Device;
}