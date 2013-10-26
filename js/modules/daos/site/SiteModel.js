define(function (require, exports, module) {
  var BasicModel = require('modules/daos/abstracts/BasicModel');
  var browser = require('utils/browser');
  var parser = require('modules/daos/site/parser');
  var config = require('config/index');

  var SiteModel = BasicModel.extend({
    url: browser.isIPhone || config.nakeServer ? '/api/site' : 'http://bbs.ngacn.cc/index.php',
    cache: {},
    parse: function (resp) {
      var data = parser(resp);
      console.log(data);
      return data;
    },
    initialize: function () {
      return this;
    },
  });
  module.exports = SiteModel;
});
