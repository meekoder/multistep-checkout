const {User} = require('../model/user-model');
const {Shipping} = require('../model/user-model');
const {Billing} = require('../model/user-model');

createAccount = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Please fill out all fields'
    });
  }

  const user = new User(body);
  if (!user) {
    return res.status(400).json({
      success: false, 
      error: err
    });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created successfully!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Failed to create user!'
      })
    });
}

addShipping = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Please fill out all fields'
    });
  }

  const shipping = new Shipping(body);
  if (!shipping) {
    return res.status(400).json({
      success: false, error: err
    })
  }

  shipping
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: shipping._id,
        message: 'Shipping information added successfully!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Failed to add shipping information!'
      })
    });
}

addBilling = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'Please fill out all fields'
    });
  }

  const user = new Billing(body);
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
        message: 'Billing information added successfully!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Failed to add billing information!'
      })
    });
}

module.exports = {
  createAccount,
  addShipping,
  addBilling
};
