const registerUser = async (request, response) => {
  try {
    const { name, email, password, dob } = request.body;
    const newUser = { name, email, password, dob };
    return response.status(202).json({
      message: 'user are created',
      newUser,
    });
  } catch (error) {
    response.status(500).json({
      message: 'user post failed',
    });
  }
};

module.exports = registerUser;
