const asyncWrapper = require('../../middleware/asyncWrapper');
const ErrorResponse = require('../../utils/ErrorResponse');
const signToken = require('../../utils/signToken');

// @desc      Login user
// @route     POST /api/auth/
// @access    Public
const login = asyncWrapper(async (req, res, next) => {
  const { password, duration } = req.body;

  console.log(process.env.PASSWORD, 123456);

  const isMatch = process.env.PASSWORD == password;

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  const token = signToken(duration);

  res.status(200).json({
    success: true,
    data: { token },
  });
});

module.exports = login;
