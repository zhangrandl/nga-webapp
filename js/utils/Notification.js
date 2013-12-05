define(function (require, exports, module) {
  // 一系列的消息方法
  // 在phonegap没有引入的情况下回滚到浏览器本身的方法运行

  var getNotif = function () {
    if (typeof navigator !== 'undefined' && typeof navigator.notification !== 'undefined') {
      return navigator.notification;
    }
  };

  var noop = function () {};

  exports.alert = function (message, callback, title, buttonName) {
    var notif = getNotif;
    callback = callback || noop;
    if (notif && notif.alert) {
      notif.alert(message, callback, title, buttonName);
    } else {
      callback(window.alert(message));
    }
  };
  exports.confirm = function (message, callback, title, buttonName) {
    var notif = getNotif;
    callback = callback || noop;
    if (notif && notif.alert) {
      notif.alert(message, callback, title, buttonName);
    } else {
      callback(window.confirm(message));
    }
  };
  exports.prompt = function (message, callback, title, buttonName, defaultText) {
    var notif = getNotif;
    callback = callback || noop;
    if (notif && notif.alert) {
      notif.alert(message, callback, title, buttonName);
    } else {
      callback(window.prompt(message, defaultText));
    }
  };

});