/**
 * Created by gwuli on 24.07.2016.
 */
import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";
import {UnlessDirective} from "./unless.directive";


@Component({
  selector: "my-structural-directives",
  template: `
    <section class="directive">
    <h2>*ngIf</h2>
    <div>
    Enter the number higher than 10
    <br>
    <input type="text" #number (keyup)="0"/>
</div>
<div *ngIf="number.value > 10">
<h5>Heading</h5>
Number is greater than 10
</div>
</section>
<section class="directive">
<h2>*ngFor</h2>
<div>
  <ul>
    <li *ngFor="let vare of list, let i = index">{{vare}} {{i}}</li>
  </ul>
</div>
</section>
<section class="directive">
<h2>[ngSwitch]</h2>
<div>
Enter red, blue, or green
<br>
<input type="text" #color (keyup)="0"/>
</div>
<div [ngSwitch]="color.value">
<template [ngSwitchCase]="'red'"><span style="color: red">Color is red</span></template>
<template [ngSwitchCase]="'blue'"><span style="color: blue">Color is blue</span></template>
<template [ngSwitchCase]="'green'"><span style="color: green">Color is green</span></template>
<template ngSwitchDefault><span>Dont know that color</span></template>

</div>
</section>

<section class="directive">
<h2>My custom derective *myUnless</h2>
<div>
Enter true or false
<br>
<input type="text" #condition (keyup)="0"/>
</div>
<div *myUnless="condition.value != 'false'">
Only shown if 'false' was entered;
</div>
</section>

`,
  directives: [HighlightDirective, UnlessDirective]
})

export class StructuralDirectiveComponent {
  list:string[] = ['Apple', 'Milk', 'Bread'];
}
