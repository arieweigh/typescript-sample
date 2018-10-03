"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elementId) {
    var inputElement = document.getElementById('txtName');
    return inputElement.value;
}
exports.getValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map