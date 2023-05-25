const express = require("express");
const cors = require("cors");
const mysql      = require('mysql2');
const dbconfig = require('./config/db');
//const connection = mysql.createConnection(dbconfig);

const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and re-sync db.');
});

require('./routes/device.routes')(app);

app.set('port', process.env.PORT || 3001);

/*
connection.connect();
  
app.get('/api/device', (req, res) => {
    connection.query('SELECT * from devices', (error, rows) => {
        if (error) throw error;
        const newRows = rows.map(row => { return { id: row.id, deviceName: row.device_name, deviceType: row.device_type, ownerName: row.owner_name, batteryStatus: row.battery_status}})
        res.json(newRows);
    });
});

app.post('/api/device', (req, res) => {
    const deviceName = req.body.deviceName;
    const deviceType = req.body.deviceType;
    const ownerName = req.body.ownerName;
    const batteryStatus = req.body.batteryStatus;
    const query = `INSERT INTO devices (device_name, device_type, owner_name, battery_status) VALUES('${deviceName}','${deviceType}','${ownerName}',${batteryStatus})`;
    
    connection.query(query, (error, rows) => {
        if (error) throw error;
        res.json(rows);
    });
});

app.put('/api/device/:id', (req, res) => {
    const deviceName = req.body.deviceName;
    const deviceType = req.body.deviceType;
    const ownerName = req.body.ownerName;
    const batteryStatus = req.body.batteryStatus;
    const query = `UPDATE devices SET device_name='${deviceName}', device_type='${deviceType}', owner_name='${ownerName}', battery_status=${batteryStatus} WHERE id = ${req.params.id}`;
    connection.query(query, (error, rows) => {
        if (error) throw error;
        res.json(rows);
    });
})

app.delete('/api/device/:id', (req, res) => {
    const query = `DELETE FROM devices WHERE id = ${req.params.id}`;
    connection.query(query, (error, rows) => {
        if (error) throw error;
        res.json(rows);
    });
});
*/
app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
