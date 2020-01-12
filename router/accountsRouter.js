const express = require('express');
const { find } = require('../database/new_accounts_model');
const { find: findUpdatedAccounts, add: addUpdatedAccount } = require('../database/updated_accounts_model');

const router = express.Router();


router.get('/new_accounts', async (req, res, next) => {
  try {
    const newAccounts = await find();
    return res.status(200).json(newAccounts);
  } catch (error) {
    next(error);
  }
});

router.get('/updated_accounts', async (req, res, next) => {
  try {
    const newAccounts = await findUpdatedAccounts();
    return res.status(200).json(newAccounts);
  } catch (error) {
    next(error);
  }
});

router.post('/updated_accounts', async (req, res, next) => {
  try {
    const result = await addUpdatedAccount(req.body);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});


router.use('/*', (req, res, next) => next());


module.exports = router;
