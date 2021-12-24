"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.index = function () {
            return "Index from Service";
        };
        this.create = function () {
            return "Create from Service";
        };
        this.update = function () {
            return "Update from Service";
        };
        this.delete = function () {
            return "Delete from Service";
        };
    }
    return UserService;
}());
exports.UserService = UserService;
