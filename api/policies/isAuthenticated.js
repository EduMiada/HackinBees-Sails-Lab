/**
 * isAuthenticated
 * @description :: Police para identificar se usuario esta logado, para WEB seria via Cookie, para JWT verifica o token
 */
var passport = require('passport');
 
module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (error, user, info) {
    if (error) return res.serverError(error);
    if (!user)  return res.forbidden(null, info && info.code, info && info.message);
    
    req.user = user;

   next();
  })(req, res);
};