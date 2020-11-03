const User = require('../model/user-model')

createAccount = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Please fill out all fields',
    })
  }

  const user = new User(body)
  if (!user) {
    return res.status(400).json({
      success: false, error: err
    })
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created successfully!',
      })
    })
    .then(error => {
      return res.status(400).json({
        error,
        message: 'Failed to create user!',
      })
    })
}

module.exports = {createAccount}
