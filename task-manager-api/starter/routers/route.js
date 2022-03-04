const express = require('express');
const router = express.Router()
const {getAllTasks,updateTasks,getTasks,createTasks,deleteTasks} = require('../Controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').patch(updateTasks).get(getTasks).delete(deleteTasks);


module.exports = router