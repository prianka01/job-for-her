const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const JobPost = require("../../models/JobPost");

const newJobPost = new JobPost({

    title: req.body.title,
    type: req.body.type,
    mode: req.body.mode,
    location: req.body.location,
    role: req.body.role,
    stipend: req.body.stipend,
    desc: req.body.desc,
    techStack: req.body.techStack,
  });

  module.exports = router;