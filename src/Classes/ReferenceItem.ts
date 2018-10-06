abstract class ReferenceItem {
  static depatrmnet: string = "Java";
  private _publisher: string;
  get publisher(): string {
    return this._publisher.toLocaleUpperCase();
  }

  set publisher(nePpublisher: string) {
    this._publisher = nePpublisher;
  }

  constructor(public title: string, private year: number) {
    console.log("New reference is created.");
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
  }
}

class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: string) {
    super(title, year);
  }
  numberInSet: number;

  printItem(): void {
    super.printItem();
    console.log("Child code executed");
  }
}

class Journal extends ReferenceItem {
  contributors: string[];
  issueNumber: number;
}

export { ReferenceItem, Encyclopedia, Journal };
