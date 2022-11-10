"use strict";
exports.__esModule = true;
exports.showAccountInfo = void 0;
var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    return User;
}());
exports["default"] = User;
function showAccountInfo(ac) {
    console.log('Account info: ');
    console.log('[id = ' + ac.getId() + '; username = ' + ac.getUsername() + ']');
}
exports.showAccountInfo = showAccountInfo;
