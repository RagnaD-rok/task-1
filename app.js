const express = require("express");
const db = require("./pkg/db/index");
const akademijaHandler = require("./handlers/akademijaHandler");
const kursHandler = require("./handlers/kursHandler");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.init();

app.get("/akademija", akademijaHandler.getAll);
app.get("/akademija/:id", akademijaHandler.getOne);

app.post("/akademija", akademijaHandler.create);
app.patch("/akademija/:id", akademijaHandler.update);
app.delete("/akademija/:id", akademijaHandler.delete);


app.get("/kurs", kursHandler.getAll);
app.get("/kurs/:id", kursHandler.getOne);

app.post("/kurs", kursHandler.create);
app.patch("/kurs/:id", kursHandler.update);
app.delete("/kurs/:id", kursHandler.delete);

app.listen(10000, (err) => {
    if (err) {
        return console.log("Couldnt start the server");
    }
    console.log("Service started succesfully on port 10000");
});