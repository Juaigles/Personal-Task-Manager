import Task from "../models/tasks.model.js";

export const getAllTask = async (req, res) => {
 try {
  const allTask = await Task.find({
    user: req.user.id,
  }).populate("user");

  res.json(allTask);
 } catch (error) {
  return res.status(404).json({ message: "Tasks not found" });
 }
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("user");
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
