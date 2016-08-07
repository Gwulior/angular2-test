/**
 * Created by gwuli on 02.08.2016.
 */
export class Ingredient {
  id: string;
  name: string;
  amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

}
