import {Component, Injectable} from "@angular/core";
/**
 * Created by gwuli on 24.07.2016.
 */

@Component({
  selector: 'component1',
  template: `

`
})

@Injectable()
export class LoggingService {

  private _lastMessage = '';
    log(message: string){
      console.log('Current Message ' + message, 'Last Message ' + this._lastMessage);
      this._lastMessage = message;
    }
}
