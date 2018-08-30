"use strict";

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
// Define the tour schema

const AstronautSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },

    ability: {
        type: Number,
        required: false
    },
});

AstronautSchema.set('versionKey', false);
AstronautSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Astronaut', AstronautSchema);