/// <reference path="./Classes/Player.ts" />
/// <reference path="./Classes/constructor.ts" />

class Startup {
    public static main(): number {     
        
        let game: Game = new Game('Nafly', 25);
        console.log(game.name);
        console.log(game.age);

        let firstPlayer: Player = new Player();
        firstPlayer.name = "Nafly Mohammed";       

        console.log(firstPlayer.formatName());        
        
        let subPlayer: SubPlayer = new SubPlayer("Sample Data");
        return 0;
    }        
}

Startup.main()