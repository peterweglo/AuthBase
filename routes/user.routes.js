const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    photo: req.user.photos[0].value,
    user: req.user.displayName,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('profileSettings');
});

module.exports = router;
