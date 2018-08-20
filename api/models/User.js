/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      
    }
  },

  //retira password do JSON - toJSON
  customToJSON: function () {
    return _.omit(this, ['password'])
  },

  //hash para senha
  beforeUpdate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  },
  beforeCreate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  }

};
