import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {NgControl, Validators} from "@angular/forms";

@Directive({
  selector: '[allowOnlyNumbers]'
})
export class AllowOnlyNumbersDirective implements OnInit{

  private regex: RegExp = new RegExp(/^[0-9]+$/);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngControl: NgControl
  ) { }

  // @HostListener('input') onInput(){
  //
  //   const elem = this.el.nativeElement;
  //
  //   if(!elem.value.match(/^[0-9]+$/)){
  //     this.renderer.addClass(elem, 'ng-invalid');
  //     this.renderer.removeClass(elem, 'ng-valid');
  //   }else{
  //     this.renderer.addClass(elem, 'ng-valid');
  //     this.renderer.removeClass(elem, 'ng-invalid');
  //   }
  // }

  ngOnInit(): void {

    if(this.ngControl){
      const control = this.ngControl.control;
      control?.setValidators(Validators.pattern(this.regex));
    }

  }


}
