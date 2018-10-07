class Utility {
  public static getInputValue(elementId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>(
      document.getElementById("txtName")
    );
    return inputElement.value;
  }

  public static logger(message: string): void {
    console.log(message);
  }

  public static Purge<T>(data: Array<T>): Array<T> {
    //logic goes here
    return data.slice(2, data.length);
  }
}
