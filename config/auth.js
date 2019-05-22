const check = (req, res, next) =>{
  if(req.isAuthenticated()){
    return(next())
  }else{
    res.redirect('/registration/login')
  }
}

module.exports = check
