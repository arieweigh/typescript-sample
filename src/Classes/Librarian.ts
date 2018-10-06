import { ILibrarian } from '../Interface/Librarian';

export class Librarian implements ILibrarian {
    name: string;
    email: string;  
    department: string;
    
    assistCustomer(custName: string) : void {
      console.log(this.name + " is assisting " + custName);
    }
  }