function getInputValue(elementId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('txtName');
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger };