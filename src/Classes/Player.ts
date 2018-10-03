import { IPerson } from '../Interface/iPerson'

class Player implements IPerson {
    name: string = "Nafly";
    age?: number;

    //Constructor
    constructor() {
        console.log("New Player instanace created.")
    }

    formatName() {
        return this.name.toUpperCase();
    }

    private result: string[] = [];
    addResult(newResult: string): void {
        this.result.push(newResult);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        //Lopp over all result
        for (let index = 0; index < this.result.length; index++) {
            let res: string = this.result[index];
            output += '<h4>';
            output += res;
            output += '</h4>';
        }
    }
}

class SubPlayer extends Player {
    readonly favoriteEditor: string;

    constructor(editor: string) {
        super();
        console.log("New SubPlayer instanace created.")
        this.favoriteEditor = editor;
    }
}

export { Player, SubPlayer };