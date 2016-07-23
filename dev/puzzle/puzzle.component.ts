import {Component, OnInit} from "@angular/core";
/**
 * Created by gwuli on 22.07.2016.
 */


@Component({
  selector: "my-puzzle",
  template: `
    <section class="setup">
    <h2>Game Setup</h2>
    Enter your name plase:
    <input type="text" #name (keyup)="0"/>
</section>
    
    <section 
    (keyup)="0"
      [ngClass]="{puzzle: true,
        solved : switch1.value == switch1Number &&
        switch2.value == switch2Number &&
        switch3.value == switch3Number &&
        switch4.value == switch4Number    
      }"
      [ngStyle]="{display: name.value === '' ? 'none' : 'block'}"
     >
    
    <h2>The Puzzle |
    {{switch1.value == switch1Number &&
        switch2.value == switch2Number &&
        switch3.value == switch3Number &&
        switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}
    </h2>
    <p>Ok, welcome <span class="name">{{name.value}}</span></p>
    <br>
    Switch1: <input type="text" #switch1/> <br>
    Switch2: <input type="text" #switch2/> <br>
    Switch3: <input type="text" #switch3/> <br>
    Switch4: <input type="text" #switch4/> <br>    
</section>
  <h2 [hidden]="switch1.value != switch1Number ||
        switch2.value != switch2Number ||
        switch3.value != switch3Number ||
        switch4.value != switch4Number">Congratulations {{name.value}}, you did it!</h2>
`
})
export class PuzzleComponent implements OnInit {

  switch1Number:number;
  switch2Number:number;
  switch3Number:number;
  switch4Number:number;

  ngOnInit():void {
    this.switch1Number = Math.round(Math.random());
    this.switch2Number = Math.round(Math.random());
    this.switch3Number = Math.round(Math.random());
    this.switch4Number = Math.round(Math.random());
    console.log(this.switch1Number,
      this.switch2Number,
      this.switch3Number,
      this.switch4Number)
  }


}
