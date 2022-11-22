const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    console.log('not logged in');
  } else {
    console.log('logged in');
    next();
  }
};

module.exports = withAuth;
