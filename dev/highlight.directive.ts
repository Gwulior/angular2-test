import {Directive, ElementRef, OnInit, Renderer, Input} from "@angular/core";
/**
 * Created by gwuli on 23.07.2016.
 */

@Directive({
  selector: "[myHighlight]",
  host : {
    '(mouseenter)' : 'onMouseEnter()',
    '(mouseleave)' : 'onMouseLeave()'
  }
})

export class HighlightDirective{


  private _defaultColor= 'green';
  @Input("myHighlight")highlightColor:string;



  // ngOnInit():void {
  //   console.log(this._defaultColor);
  //   console.log(this.highlightColor);
  //   console.log('testing stuff', this.test2);
  //   this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
  //
  // }

  constructor(private _elRef:ElementRef, private _renderer: Renderer) {

  }

  onMouseEnter(){
    this.highLight(this.highlightColor || this._defaultColor);

  }
  onMouseLeave(){
    this.highLight(null);

  }

  private highLight(color:string) {
    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color',
      color);
  }
}
