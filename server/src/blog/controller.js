const pool = require("../../db");
const queries = require("./queries");

const getAllBlogs = (req, res) => {
  console.log(res.status);
};

const getBlogById = (req, res) => {
  console.log(req.params.id);
};

module.exports = { getAllBlogs, getBlogById };
