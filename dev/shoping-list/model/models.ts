/**
 * Created by gwuli on 24.07.2016.
 */
export interface Item {
  name:string,
  amount:number
}

export class ItemImpl implements Item {

  name:string;
  amount:number;

  constructor() {
    this.name = '';
    this.amount = 0;
  }

  constructor(name:string, amount:number) {
    this.name = name;
    this.amount = amount;
  }

}
