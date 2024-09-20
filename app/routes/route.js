const express = require('express')
const TaskController = require('../controllers/Task')
const router = express.Router();

router.post('/createTask',TaskController.createTask);
router.put('/UpdateTask',TaskController.UpdateTask)
router.post('/CompleteTask',TaskController.CompleteTask)
router.get('/GetAllTask',TaskController.GetAllTask);
router.delete('/DeleteTask',TaskController.DeleteTask);



// router.get('/GetAllInCompleteTask',UserController.GetAllInCompleteTask);
// router.get('/GetTask',UserController.GetTask);

module.exports = router


