import {Directive, ViewContainerRef, TemplateRef, Input,} from "@angular/core";
/**
 * Created by gwuli on 24.07.2016.
 */

@Directive({
  selector: '[myUnless]',

})

export class UnlessDirective {
  constructor(private _templateRef:TemplateRef<any>,
              private _viewContainerRef:ViewContainerRef) {

  }

  @Input()set myUnless(condition:boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }
}
