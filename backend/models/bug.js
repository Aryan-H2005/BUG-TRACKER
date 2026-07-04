const mongoose = require("mongoose");

const bugSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },
    assignedTo: {
      type: String,
      default: "Unassigned",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Bug", bugSchema);
