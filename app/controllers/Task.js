const Taskdata = require('../model/Task')



exports.createTask = async (req, res) => {
 try {
    const { Title,Description} = req.body;
   
    if (!Title || !Description ) {
      return res.status(400).json({ Status: false, message: 'Please Fill All The Fields' });
    }
    const createdAt = new Date();
    const task = Taskdata({
            Title: Title,
            Description: Description,
            createdAt: createdAt
        });
          await task.save();
          return res.status(200).send({ Status: true, message: 'Task Created Succesfully', task});
        }
      catch (err) {
        console.log(err);
        return res.status(400).send({ Status: false, message: 'Something went wrong' });
      }
      };
      


exports.UpdateTask = async (req, res) => {
  try {
      const { task_id,Title,Description } = req.body;
      const data = await Taskdata.findByIdAndUpdate({ _id:task_id},{ $set: {Title:Title,Description:Description,}},{ new: true });
      if (!data) {
          res.status(404).send({ message: `Task Data Not Found.` });
         } else {
        return res.status(200).send({ Status: true, message: 'Task Updated Succesfully', data});
         }
         } catch (error) {
         res.status(500).send({ message: "Something went wrong", error });
      }
    };

exports.CompleteTask = async (req, res) => {
try {
      const { task_id } = req.body;
      const data = await Taskdata.findByIdAndUpdate({ _id:task_id},{ $set: {Completed:true,}},{ new: true }
      );
      if (!data) {
          res.status(404).send({ message: `Task Data Not Found.` });
      } else {
        return res.status(200).send({ Status: true, message: 'Task Completed Succesfully', data});
      }
  } catch (error) {
      console.log('Error:', error);
      res.status(500).send({ message: "Something went wrong", error });
  }
};

exports.GetAllTask = async (req, res) => {
  try {
        const completeddata = await Taskdata.find({Completed:true});
        const completedTask = completeddata.length;
                     
        const Totaldata = await Taskdata.find({});
        const Totaltask = Totaldata.length;

        const Tasks = Totaldata;
        return res.status(200).send({ Status: true, message: 'Retrieved All Completed Task Succesfully',completedTask,Totaltask,Tasks});
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.DeleteTask = async (req, res) => {
try {
    const {task_id} = req.body;
    const taskdata = await Taskdata.findOneAndDelete({ _id:task_id},{ new: true });
      if (!taskdata) {
          res.status(404).send({ message: `Task not found.` });
      } else {
        return res.status(200).send({ Status:true,message: "Task Deleted Successfully.", taskdata });
      }
  } catch (error) {
      console.log('Error:', error);
      res.status(500).send({ message: "Something went wrong", error });
  }
};

// exports.GetAllInCompleteTask = async (req, res) => {
//   try {
//     const { Authorization } = req.body;
//     const user = await UserModel.findOne({ Authorization:Authorization });
//     if (!user) {res.status(401).send({ message: 'Unauthorized User' });return;}
      
//     const data = await Taskdata.find({Completed:false});
//       const TotalTask = data.length;
//       return res.status(200).send({ Status: true, message: 'Retrieved All InComplete Task Succesfully', data,TotalTask});
//   } catch(error) {
//       res.status(404).json({message: error.message});
//   }
// };

// exports.GetTask = async (req, res) => {
//     try {
//         const{task_id}=req.body;
//         const TotalTask = data.length;
//         const data = await Taskdata.findById({_id:task_id});
//         if (!data) {
//           res.status(404).send({ message: `Task Data Not Found.` });
//       } else {
//         return res.status(200).send({ Status: true, message: 'Retrieved Task Succesfully', data,TotalTask});
//       }
//     } catch(error) {
//         res.status(404).json({ message: error.message});
//     }
// };