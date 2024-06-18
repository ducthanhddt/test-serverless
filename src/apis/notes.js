const getAllNotes = async (event) => {
  const response = { statusCode: 200 };

  try {
      response.body = JSON.stringify({
          message: "Successfully retrieved all notes.",
          event: `event: ${event}, event body: ${event.body}`
      });
  } catch (e) {
      console.error(e);
      response.statusCode = 500;
      response.body = JSON.stringify({
          message: "Failed to get post.",
          errorMsg: e.message,
          errorStack: e.stack,
      });
  }

  return response;
};

module.exports = {
  getAllNotes
}