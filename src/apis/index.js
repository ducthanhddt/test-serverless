require('dotenv').config();
require("../../db");

const {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  createMock,
  getAllMocks,
} = require("./posts");
const { getAllNotes } = require("./notes");

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getAllNotes,
  createMock,
  getAllMocks,
};
