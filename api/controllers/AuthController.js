/**
 * AuthController
 * @description :: Server-side logic for manage user's authorization
 */
var passport = require('passport');
/**
 * Triggers when user authenticates via passport
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Object} error Error object
 * @param {Object} user User profile
 * @param {Object} info Info if some error occurs
 * @private
 */

 /*
 * Callback da autorizacao Passport - Retorna JWT e dados de usuario
 */
function _onPassportAuth(req, res, error, user, info) {
  if (error) return res.serverError(error);
  if (!user) return res.forbidden(null, info && info.code, info && info.message);

  return res.ok({
    token: CipherService.createToken(user),
    user: user
  });
}

module.exports = {
  /**
   * Sign up in system
   * @param {Object} req Request object
   * @param {Object} res Response object
   */

  /*
  * Cria novo usuario e retorna JWT token
  */
  signup: async function (req, res) {
    var user = _.omit(req.allParams(), 'id');

    user = await User.create(user).fetch();

    if (user){
        return res.ok( {
          token: CipherService.createToken(user),
          user: user
        });
    }
     res.serverError;
  },

  /**
   * Sign in by local strategy in passport
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signin: function (req, res) {
    passport.authenticate('local',_onPassportAuth.bind(this, req, res))(req, res);
  },
};
