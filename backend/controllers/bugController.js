const Bug = require("../models/bug");

//Create a new bug
exports.createBug = async (req, res) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

//Get all bugs
exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

//Get a single bug by id
exports.getBugById = async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json(bug);
  } catch (error) {
    next(error);
  }
};

//update a bug by id
exports.updateBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json(bug);
  } catch (error) {
    next(error);
  }
};

//Delete a bug by id
exports.deleteBug = async (req, res) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json({ message: "Bug deleted successfully" });
  } catch (error) {
    next(error);
  }
};
