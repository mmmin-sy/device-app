const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//body parser
app.use(express.json());

app.locals.data = [
    {
        id: 0,
        deviceName: 'Samsung G',
        ownerName: 'Tom',
        deviceType: 'Tablet',
        batteryStatus: 80
    }
];

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/list', (req, res) => {
    res.json(app.locals.data);
});

app.post('/add', (req, res) => {
    app.locals.data = [...app.locals.data, req.body];
    res.json(app.locals.data);
});

app.post('/update', (req, res) => {
    const data = app.locals.data;
    const index = data.findIndex(item => item.id === req.body.id);

    if(index < 0) {
        res.status(400).json({ message: 'There is no item'})
    } else {
        data.splice(index, 1, req.body);
        app.locals.data = [...data];
    }
    res.json(app.locals.data);
})

app.delete('/:id', (req, res) => {
    const data = app.locals.data;
    const newData = data.filter(item => item.id !== parseInt(req.params.id));
        app.locals.data = [...newData];

        res.json(app.locals.data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
