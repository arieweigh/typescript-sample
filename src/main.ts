import {Player} from './Classes/Player';
import {SubPlayer} from './Classes/Player';
import {logger} from './Classes/utility';
import * as Helper from './Classes/utility';
//import * as $ from 'jquery';

class Startup {
    public static main(): number {            
       

        let firstPlayer: Player = new Player();
        firstPlayer.name = "Nafly Mohammed";       

        Helper.logger(firstPlayer.formatName());       
        logger(firstPlayer.formatName());

        let subPlayer: SubPlayer = new SubPlayer("Sample Data");
        return 0;
    }        
}

Startup.main()