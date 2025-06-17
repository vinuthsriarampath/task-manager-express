const express = require('express');
const router = express.Router();

const { getAllTasks } = require('../controllers/task-controller')


router.route('/').get(getAllTasks)

module.exports = router