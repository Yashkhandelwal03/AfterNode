const Task = require("../Models/task");
const asyncWrapper = require("../middleware/async");



//To write the code using asynncWrapper we try to reduce the redudancy of code by repeating the catch statements
//Get Method to get all the tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const gotTasks = await Task.find({});
  res.status(200).json({ gotTasks });
});

//Get the task by id
const getTasks = asyncWrapper(async (req, res) => {
  const  taskID  = req.params.id;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    res.status(400).json({ msg: `task with id ${taskID} not found` });
  }else{
    res.status(200).json({ task });
  }
});

//Creating the task
const createTasks = asyncWrapper(async (req, res) => {
  const taskResult = await Task.create(req.body);
  res.status(200).json({ taskResult });
});

//Deleting the task
const deleteTasks = asyncWrapper(async (req, res) => {
    const taskID  = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(400).json({ msg: `task with id ${taskID} not found` });
    }else{
      res.status(200).json({ task });
    }
});

//Updating the task
const updateTasks = asyncWrapper(async (req, res) => {
    const taskID  = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(400).json({ msg: `task with id ${taskID} not found` });
    }else{
      res.status(200).json({ task });
    }
});

module.exports = {
  getAllTasks,
  updateTasks,
  getTasks,
  createTasks,
  deleteTasks,
};

//Creating the task using try catch block
// const createTasks = async (req,res) =>{
//     try {
//         const taskResult = await Task.create(req.body);
//         res.status(200).json({taskResult});
//     } catch (error) {
//         res.status(500).json({ error})
//     }
// }


//Deleting the task using try catch block
// const deleteTasks = async (req,res) =>{
//     try {
//         const { id: taskID } = req.params
//         const task = await Task.findOneAndDelete({ _id: taskID })
//         if (!task) {
//             res.status(400).json({ msg:`task with id ${taskID} not found`})
//         }
//         res.status(200).json({ task })
//     } catch (error) {
//         res.status(500).json({ error})
//     }
// }


//Updating the task using try catch block
// const updateTasks = async (req,res) =>{
//     try {
//         const {taskID} = req.params.id;
//         const task = await Task.findOneAndUpdate({taskID},req.body,{
//             new:true,
//             runValidators:true
//         })
//         if (!task) {
//             res.status(400).json({ msg:`task with id ${taskID} not found`})
//         }
//         res.status(200).json({ task })
//     } catch (error) {
//         res.status(500).json({ error})
//     }
//     res.send('Tasks Updated at controllers');
// }
