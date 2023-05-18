const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//body parser
app.use(express.json());

app.locals.data = [
    {
        deviceName: 'Samsung G',
        ownerName: 'Tom',
        deviceType: 'Tablet',
        batteryStatus: 80
    }
];

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/list", (req, res) => {
    res.json(app.locals.data);
});

app.post("/update", (req, res) => {
    res.set({
        "Content-Type": "application/json",
    });

    app.locals.data = [...app.locals.data, req.body];
    res.json(app.locals.data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

