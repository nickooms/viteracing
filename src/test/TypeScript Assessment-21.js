"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainUtility = exports.identity = void 0;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.setId = function (name, id) {
        return name + " " + id;
    };
    return Utility;
}());
exports.mainUtility = Utility;
exports.identity = "EMPLOYEE";
