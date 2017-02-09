/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  perso: function (req, res)
  {
    return res.view('perso');
  },

  test: function(req, res) {
  var data = {};

      data.mesdata = {
        title: "le titre",
        content: "le contenu",
      };

  return res.view('perso');
  },

  moncompte: function(req, res) {
    var data = {};
    var where = {id: req.user.id};
    data.mesdata = {
      title: "le titre",
      content: "le contenu",
    };

    User.findOne(where)
    .populate('addresses')
    .exec(function(error, user) {
          console.log(user);
          data.user = user;
          return res.view('perso', data);
    })
  },

  upload: function() {
  },

};

