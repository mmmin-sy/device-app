const express = require("express");
const mysql      = require('mysql2');
const dbconfig = require('./config/db');
const connection = mysql.createConnection(dbconfig);

//const PORT = process.env.PORT || 3001;
const app = express();
app.set('port', process.env.PORT || 3001);

connection.connect();
  

//body parser
app.use(express.json());

app.get('/api/device', (req, res) => {
    connection.query('SELECT * from devices', (error, rows) => {
        if (error) throw error;
        const newRows = rows.map(row => { return { id: row.id, deviceName: row.device_name, deviceType: row.device_type, ownerName: row.owner_name, batteryStatus: row.battery_status}})
        res.json(newRows);
    });
});

app.post('/api/device', (req, res) => {
    const deviceName = req.body.device_name;
    const deviceType = req.body.device_type;
    const ownerName = req.body.owner_name;
    const batteryStatus = req.body.battery_status;
    const query = `INSERT INTO devices (device_name, device_type, owner_name, battery_status) VALUES('${deviceName}','${deviceType}','${ownerName}',${batteryStatus})`;
    
    connection.query(query, (error, rows) => {
        if (error) throw error;
        res.json(rows);
    });
});

app.put('/api/device/:id', (req, res) => {
    const deviceName = req.body.device_name;
    const deviceType = req.body.device_type;
    const ownerName = req.body.owner_name;
    const batteryStatus = req.body.battery_status;
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

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
