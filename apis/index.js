const {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
} = require("./posts");
const { getAllNotes } = require("./notes");

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getAllNotes,
};
