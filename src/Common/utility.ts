class utility {

  public static getInputValue(elementId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>(document.getElementById("txtName"));
    return inputElement.value;
  }

  public static logger(message: string): void {
    console.log(message);
  }

}
