"use strict";
const express  = require('express');
const router   = express.Router();
const AstronautController = require('../controllers/astronaut');
const middlewares = require('../middlewares');

router.get('/', AstronautController.list);
router.post('/', AstronautController.create);
router.put('/', AstronautController.update);
router.delete('/:id', AstronautController.remove);

module.exports = router;