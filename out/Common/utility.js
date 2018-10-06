var utility = (function () {
    function utility() {
    }
    utility.getInputValue = function (elementId) {
        var inputElement = (document.getElementById("txtName"));
        return inputElement.value;
    };
    utility.logger = function (message) {
        console.log(message);
    };
    return utility;
}());
//# sourceMappingURL=utility.js.map