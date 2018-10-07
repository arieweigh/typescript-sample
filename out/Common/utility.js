var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementId) {
        var inputElement = (document.getElementById("txtName"));
        return inputElement.value;
    };
    Utility.logger = function (message) {
        console.log(message);
    };
    Utility.Purge = function (data) {
        return data.slice(2, data.length);
    };
    return Utility;
}());
