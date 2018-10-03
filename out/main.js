"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Classes/Player");
var Player_2 = require("./Classes/Player");
var utility_1 = require("./Classes/utility");
var Helper = __importStar(require("./Classes/utility"));
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var firstPlayer = new Player_1.Player();
        firstPlayer.name = "Nafly Mohammed";
        Helper.logger(firstPlayer.formatName());
        utility_1.logger(firstPlayer.formatName());
        var subPlayer = new Player_2.SubPlayer("Sample Data");
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=main.js.map