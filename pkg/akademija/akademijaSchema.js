const mongoose = require("mongoose");
const akademiiSchema = new mongoose.Schema(
    {
        ime: {
            type: String,
            required: [true, "Mora da imam ime"],
        },
        adresa: {
            type: String,
        },
    }
);

const Akademija = mongoose.model("Akademija", akademiiSchema);
module.exports = Akademija;