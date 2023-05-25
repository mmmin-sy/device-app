const express = require("express");
const cors = require("cors");

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

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
