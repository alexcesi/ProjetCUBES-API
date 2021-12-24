"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("./controllers/user.controller");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)(); // init the app
        this.configuration();
        this.UserController = new user_controller_1.UserController; //create new instance of controller
        this.routes();
    }
    /**Method to configure the server,
     * Port by default 3000
     */
    Server.prototype.configuration = function () {
        this.app.set('port', process.env.PORT || 3001);
    };
    /**
     * Method to configure the routes
     */
    Server.prototype.routes = function () {
        this.app.use("/api/users/", this.UserController.router); //confiture the new routes of the user controller
        this.app.get("/", function (req, res) {
            res.send("Hello world!");
        });
    };
    /**
     * Used to start the server
     */
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server is listening ".concat(_this.app.get('port'), " port."));
        });
    };
    return Server;
}());
var server = new Server(); // Create server instance
server.start(); // Exectute the server
