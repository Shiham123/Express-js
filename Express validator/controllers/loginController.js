const loginController = (request, response) => {
  try {
    const { email, password } = request.body;
    if (email === 's36651786@gmail.com' && password === '12345') {
      return response.status(203).json({ message: 'login successful' });
    } else {
      return response
        .status(210)
        .json({ message: 'email/ password are wrong' });
    }
  } catch (error) {
    return response.status(403).json({ message: 'not valid user' });
  }
};

module.exports = loginController;
