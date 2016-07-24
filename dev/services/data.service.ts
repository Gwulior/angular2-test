import {Injectable} from "@angular/core";
/**
 * Created by gwuli on 24.07.2016.
 */


@Injectable()
export class DataService {
    private _data = ['Summer', 'Winter', 'Warn', 'Cold'];

  getRandomString() {
    let rndNum = Math.floor(Math.random() * this._data.length);
    return this._data[rndNum];
  }

  insert(value: string) {
    this._data.push(value);
  }
}
