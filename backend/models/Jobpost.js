const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobPostSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    role: {
        type: String,
        required: true,
    },
    stipend: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required:true,
    },
    techStack: {
        type: String,
        required:true,
    },
  });
  
  module.exports = JobPost = mongoose.model("JobPost", JobPostSchema);