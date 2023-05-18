const mongoose = require("mongoose");
const Akademija = require("./akademijaSchema");

const kursSchema = new mongoose.Schema(
    {
        ime: {
        type: String,
        required: [true, "Mora da imam ime"],
        },
        adresa: {
        type: String,
        },
        oblast: {
        type: String,
        },
    }
);

const Kurs = mongoose.model("Kurs", kursSchema);
module.exports = Kurs;