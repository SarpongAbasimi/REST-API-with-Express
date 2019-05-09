exports.registration = (req, res)=> {
  res.render('signup')
};

exports.registered = (req, res)=> {
  res.redirect('/login')
};

