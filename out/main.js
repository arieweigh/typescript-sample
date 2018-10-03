var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = (function () {
    function Player() {
        this.name = "Nafly";
        this.result = [];
        console.log("New Player instanace created.");
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    Player.prototype.addResult = function (newResult) {
        this.result.push(newResult);
    };
    Player.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.result.length; index++) {
            var res = this.result[index];
            output += '<h4>';
            output += res;
            output += '</h4>';
        }
    };
    return Player;
}());
var SubPlayer = (function (_super) {
    __extends(SubPlayer, _super);
    function SubPlayer(editor) {
        var _this = _super.call(this) || this;
        console.log("New SubPlayer instanace created.");
        _this.favoriteEditor = editor;
        return _this;
    }
    return SubPlayer;
}(Player));
var Game = (function () {
    function Game(name, age) {
        this.name = name;
        this.age = age;
    }
    return Game;
}());
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var game = new Game('Nafly', 25);
        console.log(game.name);
        console.log(game.age);
        var firstPlayer = new Player();
        firstPlayer.name = "Nafly Mohammed";
        console.log(firstPlayer.formatName());
        var subPlayer = new SubPlayer("Sample Data");
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=main.js.map