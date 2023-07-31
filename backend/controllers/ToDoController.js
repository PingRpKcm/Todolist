const ToDoModel = require("../models/ToDoModel");
const ToDoProgressModel = require("../models/ToDoProgressModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text, status: "Progress" }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  const updatedTodo = ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully...."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Delete Successfully...."))
    .catch((err) => console.log(err));
};

module.exports.updateToDoProgress = async (req, res) => {
    const { _id, progress } = req.body;
    const updatedTodoProgress = ToDoProgressModel.findByIdAndUpdate(_id, { progress })
      .then(() => res.send("Updated Successfully...."))
      .catch((err) => console.log(err));
  };
