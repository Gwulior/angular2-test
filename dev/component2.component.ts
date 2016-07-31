/**
 * Created by gwuli on 31.07.2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  template: `
Helloo im component 2!!
    <button (click)="onNavigate()">Take me to component 1</button>
`
})
export class Component2Component implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit() {
  }


  onNavigate() {
    this.router.navigate(['component-1', 'variablePass']);
  }

}
