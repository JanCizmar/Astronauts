"use strict";


const AstronautModel = require('../models/astronaut');

const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });
    try {
        let astronaut = await AstronautModel.create(req.body)
        res.json(astronaut);
    } catch (e) {
        res.status(500).json({
            error: 'DB error',
            message: e.message
        });
    }
};

const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });


    try {
        let astronaut = await AstronautModel.findByIdAndUpdate(req.body._id, {$set: req.body}, {new: true});
        res.json(astronaut);
    } catch (e) {
        res.status(500).json({
            error: 'DB error',
            message: e.message
        });
    }
};

const list = async (req, res) => {
    AstronautModel.find({}).exec().then(astronauts => {
        res.send(astronauts);
    });
};

const remove = async (req, res) => {
    let astronaut = await AstronautModel.findByIdAndRemove({_id: req.params.id}).exec();
    if(astronaut === null){
        res.status(400).json({
            error: 'Bad reuquest',
            message: 'Astronaut does not exist'
        });
    }
    res.status(200).send(astronaut);
};

module.exports = {
    create,
    update,
    list,
    remove
};